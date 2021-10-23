import React from 'react';

import { AppBar, Toolbar, IconButton, Typography, Button, Avatar } from '@mui/material';
import { useRouter } from 'next/router';

import { LANGUAGE_ENUM } from '../../interfaces';

const Header = (): JSX.Element => {
    const history = useRouter();

    const handleLanguage = () => {
        history.push(history.pathname, history.asPath, { locale: LANGUAGE_ENUM.UA as string, scroll: false });
    };

    return (
        <AppBar sx={{ background: '#7cb342' }} position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <img src="images/icons_cafeteria.svg" alt="logo" />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    CafeReview
                </Typography>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <img src="images/heart.svg" alt="favourite" />
                </IconButton>
                <select className="language_select" value={LANGUAGE_ENUM.UA} onBlur={handleLanguage}>
                    <option value="UA">UA</option>
                    <option value="RU">RU</option>
                </select>
                <Button color="inherit">
                    <Avatar src="/broken-image.jpg" />
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
