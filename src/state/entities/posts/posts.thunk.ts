import { createAsyncThunk } from '@reduxjs/toolkit';

import { Pagination } from '../../../interfaces';
import { AsyncThunkConfig } from '../../interfaces';

import { IPost } from './posts.interface';
import postsServices from './posts.services';

export const singlePostThunk = createAsyncThunk<IPost, number>('POSTS/SINGLE', async (payload: number) => {
    try {
        const { data, status } = await postsServices.singlePost(payload);
        if (status < 200 || status >= 300) throw new Error();
        return data;
    } catch (error) {
        throw new Error(error);
    }
});

export const postListThunk = createAsyncThunk<Pagination<IPost>, number | undefined, AsyncThunkConfig>(
    'POSTS/LIST',
    async (payload = 1) => {
        try {
            // const state = getState();
            const { data, status } = await postsServices.postsList(payload);
            if (status < 200 || status >= 300) throw new Error();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    },
);
