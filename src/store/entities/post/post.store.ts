import { makeAutoObservable } from 'mobx';

import postInitState from './post.init-state';
import { PostState } from './post.interface';

export default class Post {
    state: PostState = postInitState;

    constructor() {
        makeAutoObservable(this);
    }
}
