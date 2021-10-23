import { PostState } from './post.interface';

const postInitState: PostState = {
    single: {
        status: 'idle',
        data: {
            title: 'loading ...',
            description: 'loading ...',
            img: null,
            rating: 0,
            views: 0,
        },
    },
    list: {
        status: 'idle',
        data: {
            totalItems: 0,
            totalPages: 0,
            currentPage: 0,
            data: [],
        },
    },
};

export default postInitState;
