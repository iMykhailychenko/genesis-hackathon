import '../styles/root.scss';

import React from 'react';

import axios from 'axios';
import type { AppProps } from 'next/app';
import App from 'next/app';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router } from 'next/router';
import { Provider } from 'react-redux';

import RootLayout from '../components/layout/root-layout/root-layout';
import RootProvider from '../context/root-provider';
import { parseCookie } from '../helpers/cookie.helper';
import interceptor from '../helpers/interceptor.helper';
import authInitialState from '../state/entities/auth/auth.initial-state';
import { IAuthState } from '../state/entities/auth/auth.interface';
import { initializeStore } from '../state/store';

interface IProps {
    auth: IAuthState;
}

const MyApp = ({ Component, pageProps, auth }: AppProps & IProps): JSX.Element => {
    interceptor();

    const store = initializeStore(pageProps.state);

    return (
        <Provider store={store}>
            <RootProvider auth={auth}>
                <RootLayout>
                    <Component {...pageProps} />
                </RootLayout>
            </RootProvider>
        </Provider>
    );
};

MyApp.getInitialProps = async (appContext: AppContextType<Router>): Promise<IProps> => {
    const props = await App.getInitialProps(appContext);
    // auth
    const auth = parseCookie<IAuthState>({
        key: 'house_rent_auth',
        value: appContext?.ctx?.req?.headers?.cookie,
        defaultValue: authInitialState,
    });
    axios.defaults.headers.common.Authorization = auth.accessToken ? `Bearer ${auth.accessToken}` : '';

    return { ...props, auth };
};

export default MyApp;
