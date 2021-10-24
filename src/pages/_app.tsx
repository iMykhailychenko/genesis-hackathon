import React, { useEffect } from 'react';

import App from 'next/app';
import type { AppProps } from 'next/app';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router } from 'next/router';

import { getUser } from '../context/auth/auth';
import RootProvider from '../context/root-provider';

interface IProps {
    auth: any;
}

const MyApp = ({ Component, pageProps, auth }: AppProps & IProps): JSX.Element => {
    return (
        <RootProvider auth={auth}>
            <Component {...pageProps} />
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
