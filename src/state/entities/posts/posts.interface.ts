import { IUser, Pagination } from '../../../interfaces';
import { ThunkStatuses } from '../../interfaces';

export interface IPost {
    id: number;
    title: string;
    description: string;
    image: string | null;
    pets: boolean;
    views: number;
    createdAt: string;
    updatedAt: string;
    district: string;
    price: string;
    restaurantType: string;
    address: string;
    user: IUser;
    isFavorite: boolean;
    favorite: number;
    comments: [];
}

export interface INewPostState {
    status: ThunkStatuses;
    error: string | null;
}

export interface ISinglePostState {
    status: ThunkStatuses;
    error: string | null;
    data: IPost;
}

export type IPostsListState = {
    status: ThunkStatuses;
    error: string | null;
} & Pagination<IPost>;

export interface IPostState {
    new: INewPostState;
    update: INewPostState;
    single: ISinglePostState;
    list: IPostsListState;
}

export enum DISTRICT_FILTERS {
    DARNYTSIA = 'darnytsia',
    DESNIANSKYI = 'desnianskyi',
    DNIPROVSKYI = 'dniprovskyi',
    HOLOSIIV = 'holosiiv',
    OBOLONSKYI = 'obolonskyi',
    PECHERSKYI = 'pecherskyi',
    PODIL = 'podil',
    SHEVCHENKIVSKYI = 'shevchenkivskyi',
    SOLOMIANSKYI = 'solomianskyi',
    SVIATOSHYNSKYI = 'sviatoshynskyi',
}

export enum PRICE_FILTERS {
    LOW = 'low',
    MID = 'mid',
    HIGH = 'high',
}

export enum RESTAURANT_TYPE_FILTERS {
    RESTAURANT = 'restaurant',
    BAR = 'bar',
    CAFE = 'cafe',
    CAFETERIA = 'cafeteria',
    CANTEEN = 'canteen',
    SNACK_BAR = 'snack bar',
    BUFFET = 'buffet',
    PROCUREMENT_FACTORIES = 'procurement_factories',
    KITCHEN_FACTORY = 'kitchen_factory',
    HOME_KITCHEN = 'home_kitchen',
    SPECIAL_ORDERS = 'special_orders',
}
