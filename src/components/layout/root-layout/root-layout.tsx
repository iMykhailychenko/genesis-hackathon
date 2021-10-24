import React from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';

import {ThemeProvider } from '@mui/material/styles';
import THEME from '../theme/theme';


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
