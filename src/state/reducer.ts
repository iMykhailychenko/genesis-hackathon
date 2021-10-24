import { combineReducers } from '@reduxjs/toolkit';

import auth from './entities/auth/auth.reducer';
import profile from './entities/profile/profile.reducer';
import users from './entities/users/users.reducer';
import posts from './entities/posts/posts.reducer';
import { IState } from './interfaces';

const rootReducer = combineReducers<IState>({
    auth,
    profile,
    users,
    posts,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
