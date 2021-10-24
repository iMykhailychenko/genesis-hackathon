import { IUser } from '../../../interfaces';
import { ThunkStatuses } from '../../interfaces';

export interface IProfileInfoState {
    status: ThunkStatuses;
    data: IUser;
}
