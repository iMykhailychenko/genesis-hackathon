import React, { ReactElement } from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout(): ReactElement {
    return (
        <>
            <Header />
            <Footer />
        </>
    );
}
