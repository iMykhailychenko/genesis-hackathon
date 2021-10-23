import { Pagination, LoadingState } from './../../../interfaces/services';

export interface IPost {
    title: string;
    description: string;
    img: string | null;
    rating: number;
    views: number;
}

export type PostsList = Pagination<IPost>;

export interface PostState {
    single: LoadingState<IPost>;
    list: LoadingState<PostsList>;
}
