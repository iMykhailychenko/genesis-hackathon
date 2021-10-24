import '../styles/root.scss';

import React from 'react';

import type { AppProps } from 'next/app';

import RootLayout from '../components/layout/root-layout/root-layout';
import RootProvider from '../context/root-provider';
import interceptor from '../helpers/interceptor.helper';

interface IProps {
    width: number;
}

const MyApp = ({ Component, pageProps }: AppProps & IProps): JSX.Element => {
    interceptor();

    return (
        <RootProvider store={pageProps}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </RootProvider>
    );
};

export default MyApp;
