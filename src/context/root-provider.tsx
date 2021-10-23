import React, { ReactElement } from 'react';

import { Store } from '../store/store';

import StoreProvider from './store/store';

interface IProps {
    store: Store;
    children: JSX.Element;
}

const RootProvider = ({ store, children }: IProps): ReactElement => (
    <StoreProvider initialState={store}>{children}</StoreProvider>
);

export default RootProvider;
