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
