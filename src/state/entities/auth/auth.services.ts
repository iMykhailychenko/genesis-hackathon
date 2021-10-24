import axios from 'axios';

import env from '../../../config/env.config';
import { Response } from '../../../interfaces';

import { IAuthResponse, IJoinPayload, ILoginPayload } from './auth.interface';

const authServices = {
    join: (body: IJoinPayload): Response<void> => axios.post(env.backand + '/users', body),
    login: (body: ILoginPayload): Response<IAuthResponse> => axios.post(env.backand + '/users/login', body),
};

export default authServices;
