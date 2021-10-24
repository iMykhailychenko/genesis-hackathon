import { combineReducers } from '@reduxjs/toolkit';

import auth from './entities/auth/auth.reducer';
import profile from './entities/profile/profile.reducer';
import users from './entities/users/users.reducer';
import { IState } from './interfaces';

const rootReducer = combineReducers<IState>({
    auth,
    profile,
    users,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
