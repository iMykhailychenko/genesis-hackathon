import { AxiosResponse } from 'axios';

export type FetchStatus = 'idle' | 'loading' | 'success' | 'error';

export type LoadingState<T> = {
    status: FetchStatus;
    data: T;
};

export type Pagination<T> = {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    data: T[];
};

export interface Params {
    [key: string]: string | number | null;
}

export type Response<T> = Promise<AxiosResponse<T>>;

export enum LANGUAGE_ENUM {
    RU = 'ru',
    UA = 'ua',
}

export interface IContent {
    [key: string]: string;
}

export interface ILocales {
    [key: string]: IContent;
}

export type TransFn = (value: string) => string;

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

export interface IUser {
    id: number;
    creationAt: string;
    lastActivity: string;
    avatar: string | null;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
}
