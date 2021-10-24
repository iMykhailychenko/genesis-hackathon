import React, { ReactElement } from 'react';

import { IAuth } from '../interfaces/auth';

import { AuthProvider } from './auth/auth';

interface IProps {
    children: JSX.Element[] | JSX.Element;
    auth: IAuth;
}

const RootProvider = ({ auth, children }: IProps): ReactElement => {
    return <AuthProvider myAuth={auth}>{children}</AuthProvider>;
};

export default RootProvider;
