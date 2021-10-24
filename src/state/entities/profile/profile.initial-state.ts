import { IUser, UserRole } from '../../../interfaces';

import { IProfileInfoState } from './profile.interface';

export const userInitValue: IUser = {
    id: 0,
    creationAt: '01-01-2021',
    lastActivity: '01-01-2021',
    avatar: null,
    firstName: 'loading...',
    lastName: 'loading...',
    email: 'loading...',
    role: UserRole.USER,
};

export const profileInitialState: IProfileInfoState = {
    status: 'idle',
    data: userInitValue,
};
