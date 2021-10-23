import React, { useEffect } from 'react';

import type { AppProps } from 'next/app';

import RootProvider from '../context/root-provider';

interface IProps {
    width: number;
}

const MyApp = ({ Component, pageProps }: AppProps & IProps): JSX.Element => {
    useEffect(() => {
        const resize = (): void => document.body.style.setProperty('--100vh', window.innerHeight + 'px');
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <RootProvider store={pageProps}>
            <Component {...pageProps} />
        </RootProvider>
    );
};

export default MyApp;
