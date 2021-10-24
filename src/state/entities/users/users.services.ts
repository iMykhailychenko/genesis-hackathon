import axios from 'axios';

import env from '../../../config/env.config';
import { IUser, Response } from '../../../interfaces';

const userServices = {
    getUserInfo: (id: number): Response<IUser> => axios.get(env.backand + `/users/${id}`),
};

export default userServices;
