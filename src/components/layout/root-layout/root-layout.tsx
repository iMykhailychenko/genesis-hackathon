import React from 'react';

import { ThemeProvider } from '@mui/material/styles';

import Footer from '../footer/footer';
import Header from '../header/header';
import { THEME } from '../theme/theme';

interface Props {
    children: JSX.Element;
}

const RootLayout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <ThemeProvider theme={THEME}>
                <Header />
                <main>{children}</main>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default RootLayout;
