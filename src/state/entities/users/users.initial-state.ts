import { IUser, UserRole } from '../../../interfaces';

import { IUserState } from './users.interface';

export const usersInitValue: IUser = {
    id: 0,
    creationAt: '01-01-2021',
    lastActivity: '01-01-2021',
    avatar: null,
    firstName: 'loading...',
    lastName: 'loading...',
    email: 'loading...',
    role: UserRole.USER,
};

export const usersInitialState: IUserState = {
    status: 'idle',
    data: usersInitValue,
};
