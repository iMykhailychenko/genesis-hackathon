import React, { ReactElement, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header(): ReactElement {
    const [language, setLanguage] = useState<string>('UA');

    const handleLanguage = (e: { target: { value: React.SetStateAction<string> } }) => {
        setLanguage(e.target.value);
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
                <select className="language_select" value={language} onChange={handleLanguage}>
                    <option value="UA">UA</option>
                    <option value="RU">RU</option>
                </select>
                <Button color="inherit">
                    <Avatar src="/broken-image.jpg" />
                </Button>
            </Toolbar>
        </AppBar>
    );
}
