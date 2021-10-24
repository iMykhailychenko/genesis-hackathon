import { useContext } from 'react';

import { StoreContext } from '../context/store/store';
import { Store } from '../store/store';

export const useStore = (): Store | null => {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within StoreProvider');
    }

    return context;
};
