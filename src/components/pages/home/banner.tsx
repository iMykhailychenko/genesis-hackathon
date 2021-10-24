import React from 'react';

import Filters from '../../filters/filters';

import css from './banner.module.scss';

const Banner = (): JSX.Element => {
    return (
        <div className={css.main_content}>
            <div className={css.content_banner}>
                <img className={css.banner_image} src="/images/banner.jpeg" alt="banner" />
                <Filters />
            </div>
        </div>
    );
};

export default Banner;
