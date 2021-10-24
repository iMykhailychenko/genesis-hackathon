import '../styles/root.scss';

import React from 'react';

import type { AppProps } from 'next/app';
import App from 'next/app';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router } from 'next/router';

import RootLayout from '../components/layout/root-layout/root-layout';
import { getUser } from '../context/auth/auth';
import RootProvider from '../context/root-provider';
import interceptor from '../helpers/interceptor.helper';

interface IProps {
    auth: any;
}

const MyApp = ({ Component, pageProps, auth }: AppProps & IProps): JSX.Element => {
    interceptor();

    return (
        <RootProvider auth={auth} store={pageProps}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </RootProvider>
    );
};

MyApp.getInitialProps = (appContext: AppContextType<Router>): Promise<IProps> => {
    return Promise.all([App.getInitialProps(appContext), getUser(appContext.ctx)])
        .then(([props, auth]) => {
            return { ...props, auth };
        })
        .catch(err => {
            console.log(err);
            process.exit(1);
        });
};

export default MyApp;
