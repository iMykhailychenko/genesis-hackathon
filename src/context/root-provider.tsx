import React, { ReactElement } from 'react';

import { IAuth } from '../interfaces/auth';

import { AuthProvider } from './auth/auth';


import { Store } from '../store/store';

import StoreProvider from './store/store';

interface IProps {
    store: Store;
        auth: IAuth;
    children:JSX.Element[] | JSX.Element;
}

const RootProvider = ({ store, auth, children }: IProps): ReactElement => (
   <StoreProvider initialState={store}> <AuthProvider myAuth={auth}>{children}</AuthProvider></StoreProvider>;
);

export default RootProvider;
