import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pagination } from '../../../interfaces';

import { postsInitialState } from './posts.initial-state';
import { IPost, IPostState } from './posts.interface';
import { postListThunk, singlePostThunk } from './posts.thunk';

const postsSlice = createSlice({
    name: 'POSTS',
    initialState: postsInitialState,
    reducers: {},
    extraReducers: builder => {
        // SINGLE POST THUNK
        builder.addCase(singlePostThunk.pending, (state: IPostState) => {
            state.single.status = 'loading';
        });
        builder.addCase(singlePostThunk.fulfilled, (state: IPostState, action: PayloadAction<IPost>) => {
            state.single.status = 'success';
            state.single.data = action.payload;
        });
        builder.addCase(singlePostThunk.rejected, (state: IPostState) => {
            state.single.status = 'error';
            state.single.error = 'error';
        });

        // POSTS LIST THUNK
        builder.addCase(postListThunk.pending, (state: IPostState) => {
            state.list.status = 'loading';
        });
        builder.addCase(postListThunk.fulfilled, (state: IPostState, action: PayloadAction<Pagination<IPost>>) => {
            state.list.status = 'success';
            state.list.totalItems = action.payload.totalItems;
            state.list.totalPages = action.payload.totalPages;
            state.list.currentPage = action.payload.currentPage;
            state.list.data = action.payload.data;
        });
        builder.addCase(postListThunk.rejected, (state: IPostState) => {
            state.list.status = 'error';
            state.list.error = 'error';
        });
    },
});

export default postsSlice.reducer;
