import axios, { AxiosResponse } from 'axios';

import { Params } from '../../../interfaces';

import { IPost, PostsList } from './post.interface';

const postService = {
    getPostList: (params: Params): Promise<AxiosResponse<PostsList>> => axios.get('/posts', { params }),
    getSinglePost: (id: number): Promise<AxiosResponse<IPost>> => axios.get('/posts/' + id),
};

export default postService;
