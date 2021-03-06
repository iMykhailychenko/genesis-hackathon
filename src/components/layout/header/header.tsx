import React from 'react';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useAuth from '../../../hooks/auth.hook';
import { LANGUAGE_ENUM } from '../../../interfaces';
import { useAuthSelector } from '../../../state/entities/auth/auth.selector';

import css from './header.module.scss';

const Header = (): JSX.Element => {
    const history = useRouter();
    const [auth] = useAuth();
    console.log(auth);

    const handleChange = (event: SelectChangeEvent<string>): void => {
        history.push(history.pathname, history.asPath, { locale: event.target.value, scroll: false });
    };

    return (
        <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
            <Toolbar>
                <IconButton
                    onClick={() => history.push('/')}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <img src="/images/icons_cafeteria.svg" alt="logo" />
                </IconButton>

                <Box sx={{ flexGrow: 1 }} />

                <FormControl variant="standard">
                    <Select
                        className={css.select}
                        labelId="language"
                        value={history.locale}
                        onChange={handleChange}
                        disableUnderline
                    >
                        <MenuItem sx={{ minWidth: 60, fontSize: '1.2rem' }} value={LANGUAGE_ENUM.UA}>
                            {LANGUAGE_ENUM.UA}
                        </MenuItem>
                        <MenuItem sx={{ minWidth: 60, fontSize: '1.2rem' }} value={LANGUAGE_ENUM.RU}>
                            {LANGUAGE_ENUM.RU}
                        </MenuItem>
                    </Select>
                </FormControl>

                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mx: 2 }}>
                    <BookmarkBorderIcon />
                </IconButton>

                {auth?.accessToken ? (
                    <Button color="inherit" onClick={() => history.push('/profile')}>
                        <Avatar src="/broken-image.jpg" />
                    </Button>
                ) : (
                    <ButtonGroup variant="contained">
                        <Button onClick={() => history.push('/login')}>Login</Button>
                        <Button onClick={() => history.push('/join')}>Join</Button>
                    </ButtonGroup>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
