import React from 'react';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from 'next/router';

import { LANGUAGE_ENUM } from '../../../interfaces';

import css from './header.module.scss';

const Header = (): JSX.Element => {
    const history = useRouter();

    const handleChange = (event: SelectChangeEvent<string>): void => {
        history.push(history.pathname, history.asPath, { locale: event.target.value, scroll: false });
    };

    return (
        <AppBar position="static" sx={{bgcolor: 'primary.main'}}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <img src="images/icons_cafeteria.svg" alt="logo" />
                </IconButton>

                <Box sx={{ flexGrow: 1 }} />

                <FormControl variant="standard">
                    <Select className={css.select} labelId="language" value={history.locale} label="Age" onChange={handleChange}>
                        <MenuItem sx={{ minWidth: 100, fontSize: '1.6rem' }} value={LANGUAGE_ENUM.UA}>
                            {LANGUAGE_ENUM.UA}
                        </MenuItem>
                        <MenuItem sx={{ minWidth: 100, fontSize: '1.6rem' }} value={LANGUAGE_ENUM.RU}>
                            {LANGUAGE_ENUM.RU}
                        </MenuItem>
                    </Select>
                </FormControl>

                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mx: 2 }}>
                    <BookmarkBorderIcon />
                </IconButton>

                <Button color="inherit">
                    <Avatar src="/broken-image.jpg" />
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
