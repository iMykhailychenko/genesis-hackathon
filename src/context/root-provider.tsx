import React from 'react';

import { IAuthState } from '../state/entities/auth/auth.interface';

import AuthProvider from './auth/auth';

interface IProps {
    auth: IAuthState;
    children: JSX.Element[] | JSX.Element;
}

const RootProvider = ({ auth, children }: IProps): JSX.Element => <AuthProvider authServer={auth}>{children}</AuthProvider>;

export default RootProvider;
