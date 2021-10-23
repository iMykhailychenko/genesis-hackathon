import React from 'react';

const Banner = (): JSX.Element => {
    return (
        <div className="main_content">
            <div className="content_banner">
                <img className="banner_image" src="/images/banner.jpeg" alt="banner" />
                <div className="banner_text">Lorem ipsum dolor</div>
            </div>
        </div>
    );
};

export default Banner;
