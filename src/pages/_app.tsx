import React, { useEffect } from 'react';

import App from 'next/app';
import type { AppProps } from 'next/app';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router } from 'next/router';
import './styles.scss';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import RootProvider from '../context/root-provider';

interface IProps {
    width: number;
}

const MyApp = ({ Component, pageProps, width }: AppProps & IProps): JSX.Element => {
    useEffect(() => {
        const resize = (): void => document.body.style.setProperty('--100vh', window.innerHeight + 'px');
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <RootProvider serverProps={{ width }}>
            <Component {...pageProps} />
        </RootProvider>
    );
};

MyApp.getInitialProps = async (appContext: AppContextType<Router>): Promise<IProps> => {
    const props = await App.getInitialProps(appContext);

    const toMatch =
        /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i;
    const isMobile = toMatch.test(appContext?.ctx?.req?.headers?.['user-agent'] || '');

    return { ...props, width: isMobile ? 450 : 1300 };
};

export default App;
