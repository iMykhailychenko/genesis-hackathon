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
