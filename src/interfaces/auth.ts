import { IUser } from './user';

export interface IAuth {
    status: string;
    user: IUser;
}
