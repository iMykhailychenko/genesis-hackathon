import { combineReducers } from '@reduxjs/toolkit';

import auth from './entities/auth/auth.reducer';
import profile from './entities/profile/profile.reducer';
import { IState } from './interfaces';

const rootReducer = combineReducers<IState>({
    auth,
    profile,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
