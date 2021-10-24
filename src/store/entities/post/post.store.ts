import { makeAutoObservable } from 'mobx';

import { Params } from '../../../interfaces';

import postInitState from './post.init-state';
import { IPost, PostsList, PostState } from './post.interface';
import postService from './post.service';

export default class Post {
    state: PostState = postInitState;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchPostsList(params: Params): Promise<PostsList> {
        try {
            this.state.list.status = 'loading';
            const { data, status } = await postService.getPostList(params);
            if (status < 200 || status > 399) throw new Error();

            this.state.list.status = 'success';
            this.state.list.data = data;
            return data;
        } catch (e) {
            this.state.list.status = 'error';
            return postInitState.list.data;
        }
    }

    async singlePost(id: number): Promise<IPost> {
        try {
            this.state.single.status = 'loading';
            const { data, status } = await postService.getSinglePost(id);
            if (status < 200 || status > 399) throw new Error();

            this.state.single.status = 'success';
            this.state.single.data = data;
            return data;
        } catch (e) {
            this.state.single.status = 'error';
            return postInitState.single.data;
        }
    }
}
