import React from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';

interface Props {
    children: JSX.Element;
}
const RootLayout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default RootLayout;
