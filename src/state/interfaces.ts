import { Dispatch } from 'redux';

import { IAuthState } from './entities/auth/auth.interface';
import { IPostState } from './entities/posts/posts.interface';
import { IProfileInfoState } from './entities/profile/profile.interface';
import { IUserState } from './entities/users/users.interface';

export type ThunkStatuses = 'idle' | 'loading' | 'success' | 'error';

export interface IState {
    auth: IAuthState;
    profile: IProfileInfoState;
    users: IUserState;
    posts: IPostState;
}

export type AsyncThunkConfig = {
    state: IState;
    dispatch: Dispatch;
};
