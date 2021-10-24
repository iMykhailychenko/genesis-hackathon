import React, { ReactElement } from 'react';

import Filters from '../filters/Filters';

export default function MainContent(): ReactElement {
    return (
        <main className="main_content">
            <div className="content_banner">
                <img className="banner_image" src="/images/banner.jpeg" alt="banner" />
                <div className="banner_text">Lorem ipsum dolor</div>
            </div>
            <Filters />
        </main>
    );
}
