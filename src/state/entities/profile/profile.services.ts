import axios from 'axios';

import env from '../../../config/env.config';
import { IUser, Response, UserRole } from '../../../interfaces';

const profileServices = {
    getProfileInfo: (): Response<IUser> => axios.get(env.backand + '/users/profile'),
    updateProfileRole: (role: UserRole): Response<void> => axios.put(env.backand + '/users/role', { role }),
};

export default profileServices;
