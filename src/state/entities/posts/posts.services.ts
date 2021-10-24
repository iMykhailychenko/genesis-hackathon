import axios from 'axios';

import env from '../../../config/env.config';
import { Pagination, Params, Response } from '../../../interfaces';

import { IPost } from './posts.interface';

const postsServices = {
    singlePost: (id: number): Response<IPost> => axios.get(env.backand + '/posts/' + id),
    postsList: (page: number, params: Params = {}): Response<Pagination<IPost>> => axios.get(env.backand + '/posts', { params }),
};

export default postsServices;
