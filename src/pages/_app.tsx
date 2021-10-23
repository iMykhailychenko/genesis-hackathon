import React from 'react';

import '../styles/styles.scss';

import type { AppProps } from 'next/app';

import Layout from '../components/layout/layout';
import RootProvider from '../context/root-provider';

interface IProps {
    width: number;
}

const MyApp = ({ Component, pageProps }: AppProps & IProps): JSX.Element => {
    return (
        <RootProvider store={pageProps}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RootProvider>
    );
};

export default MyApp;
