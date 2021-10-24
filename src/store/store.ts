import { enableStaticRendering } from 'mobx-react-lite';

import Post from './entities/post/post.store';

enableStaticRendering(process.browser);

export class Store {
    constructor(public readonly post: Post) {}

    hydrate = (data: Store): void => {
        if (!data) return;
        Object.assign(this, data);
    };
}

export const appStore = new Store(new Post());
