import React from 'react';

import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

import { IUser } from '../../interfaces/user';

const UserProfileEdit = (user: IUser): JSX.Element => {
    return (
        <div className="profile-edit">
            <div className="profile_avatar">
                <Avatar sx={{ width: '200px', height: '200px', marginBottom: '20px' }} alt="avatar" src={user.avatar} />
                <Button sx={{ display: 'block' }} variant="contained" size="large">
                    Змінити аватар
                </Button>
            </div>

            <div className="profile_information-edit">
                <InputLabel id="demo-simple-select-label">Ім&apos;я</InputLabel>
                <TextField sx={{ marginBottom: '25px', width: '100%' }} id="outlined-basic" variant="outlined" />

                <InputLabel id="demo-simple-select-label">Прізвище</InputLabel>
                <TextField sx={{ marginBottom: '25px', width: '100%' }} id="outlined-basic" variant="outlined" />

                <InputLabel id="demo-simple-select-label">Електронна адреса</InputLabel>
                <TextField sx={{ marginBottom: '25px', width: '100%' }} id="outlined-basic" variant="outlined" />

                <Button sx={{ display: 'block' }} variant="contained" size="large">
                    Редагувати профіль
                </Button>
            </div>
        </div>
    );
};

export default UserProfileEdit;
