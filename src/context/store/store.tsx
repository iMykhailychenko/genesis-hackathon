import { createContext } from 'react';

import { Store, appStore } from '../../store/store';

let store: Store;
export const StoreContext = createContext<Store | null>(null);

const initializeStore = (initialData: Store | null = null) => {
    const _store = store ?? appStore;

    if (initialData) {
        _store.hydrate(initialData);
    }
    if (typeof window === 'undefined') return _store;
    if (!store) store = _store;
    return _store;
};

interface IProps {
    children: JSX.Element;
    initialState: Store;
}
const StoreProvider = ({ children, initialState }: IProps): JSX.Element => {
    const store = initializeStore(initialState);
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
