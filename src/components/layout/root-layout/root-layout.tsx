import React from 'react';

import Box from '@mui/material/Box';

import Footer from '../footer/footer';
import Header from '../header/header';

interface Props {
    children: JSX.Element;
}
const RootLayout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Box sx={{ flexGrow: 1 }}>{children}</Box>
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
