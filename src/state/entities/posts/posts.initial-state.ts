import { userInitValue } from '../profile/profile.initial-state';

import { IPost, IPostState } from './posts.interface';

export const singlePostsInitialState: IPost = {
    id: 0,
    title: 'loading...',
    description: 'loading...',
    image: null,
    pets: false,
    createdAt: '10-10-2010',
    updatedAt: '10-10-2010',
    user: userInitValue,
    isFavorite: false,
    favorite: 0,
    views: 0,
    district: 'loading...',
    price: 'low',
    restaurantType: 'loading...',
    address: 'loading...',
    comments: [],
};

export const postsInitialState: IPostState = {
    new: {
        status: 'idle',
        error: null,
    },
    update: {
        status: 'idle',
        error: null,
    },
    single: {
        error: null,
        status: 'idle',
        data: singlePostsInitialState,
    },
    list: {
        error: null,
        status: 'idle',
        totalItems: 0,
        totalPages: 0,
        currentPage: 0,
        data: [],
    },
};
