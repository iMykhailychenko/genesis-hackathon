import { makeAutoObservable } from 'mobx';

import { FetchStatus, Params } from '../../../interfaces';

import postInitState from './user.init-state';
import { IUser } from './user.interface';
import userService from './user.service';

export default class User {
    state: { user: IUser; token: string; status: FetchStatus } = postInitState;

    constructor() {
        makeAutoObservable(this);
    }

    async login(email: string, password: string): Promise<void> {
        try {
            this.state.status = 'loading';
            const { data, status } = await userService.login(email, password);
            if (status < 200 || status > 399) throw new Error();

            this.state.status = 'success';
            this.state.token = data.accessToken;
        } catch (error) {
            this.state.status = 'error';
        }
    }

    async fetchUser(params: Params): Promise<IUser> {
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
