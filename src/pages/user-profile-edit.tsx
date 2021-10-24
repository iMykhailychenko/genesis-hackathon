import React from 'react';

import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';

import { IUser } from '../../interfaces/user';
import TextField from '@mui/material/TextField';

const UserProfileEdit = (user1: IUser): JSX.Element => {
    const user = {
        avatar: '/static/images/avatar/1.jpg',
        firstName: 'Test Name',
        lastName: 'Test Last Name',
        mail: 'test@test.com',
        createdAt: '2021-10-21',
        role: 'admin',
    };
    return (
        <div className="profile-edit">
            <div className="profile_avatar">
                <Avatar sx={{ width: '200px', height: '200px', marginBottom: '20px' }} alt="avatar" src={user.avatar} />
                <Button sx={{ display: 'block' }} variant="contained" size="large">
                    Изменить аватар
                </Button>
            </div>

            <div className="profile_information-edit">
                <InputLabel id="demo-simple-select-label">Имя</InputLabel>
                <TextField sx={{ marginBottom: '25px', width: '100%' }} id="outlined-basic" variant="outlined" />

                <InputLabel id="demo-simple-select-label">Фамилия</InputLabel>
                <TextField sx={{ marginBottom: '25px', width: '100%' }} id="outlined-basic" variant="outlined" />

                <InputLabel id="demo-simple-select-label">Электронная почта</InputLabel>
                <TextField sx={{ marginBottom: '25px', width: '100%' }} id="outlined-basic" variant="outlined" />

                <Button sx={{ display: 'block' }} variant="contained" size="large">
                    Редактировать профиль
                </Button>
            </div>
        </div>
    );
};

export default UserProfileEdit;
