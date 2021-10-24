import axios, { AxiosResponse } from 'axios';

import { Params } from '../../../interfaces';

import { IPost, PostsList } from './post.interface';
import { IUser } from './user.interface';

const postService = {
    login: (email: string, password: string): Promise<AxiosResponse<{ accessToken: string }>> =>
        axios.get('/users/login', {
            data: { email, password },
        }),
    register: (firstName: string, lastName: string, email: string, password: string): Promise<AxiosResponse> =>
        axios({
            method: 'POST',
            url: '/users',
            data: { firstName, lastName, email, password, role: ['user'] },
        }),
    getUser: (): Promise<AxiosResponse> =>
        axios({
            method: 'POST',
            url: '/users/profile',
            // headers: { Authorization: token ? `Bearer ${token}` : '' },
        }),
};

export default postService;
