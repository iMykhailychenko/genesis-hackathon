import React, { ReactElement } from 'react';

import Footer from './Footer';
import Header from './Header';
import MainContent from './main-content';

export default function Layout(): ReactElement {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}
