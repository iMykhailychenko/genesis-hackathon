import { FetchStatus } from './../../../interfaces/services';
import { IUser } from './user.interface';

const userInitState: { user: IUser; token: string; status: FetchStatus } = {
    user: { firstName: '', lastName: '', mail: '', avatar: '', createdAt: new Date(), role: '' },
    token: '',
    status: 'idle',
};

export default userInitState;
