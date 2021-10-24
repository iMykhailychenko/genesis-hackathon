import { shallowEqual } from 'react-redux';

import { useAppSelector } from '../../../hooks/redux.hook';
import { RootState } from '../../reducer';

import { INewPostState, IPostsListState, ISinglePostState } from './posts.interface';

export const useNewPostSelector = (): INewPostState =>
    useAppSelector<INewPostState>(({ posts }: RootState) => posts.new, shallowEqual);

export const useSinglePostSelector = (): ISinglePostState =>
    useAppSelector<ISinglePostState>(({ posts }: RootState) => posts.single, shallowEqual);

export const usePostListSelector = (): IPostsListState =>
    useAppSelector<IPostsListState>(({ posts }: RootState) => posts.list, shallowEqual);
