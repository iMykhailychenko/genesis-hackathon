import React from 'react';

import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

import Meta from '../components/meta/meta';

const UserProfileEdit = (user1: any): JSX.Element => {
    const user = {
        avatar: '/static/images/avatar/1.jpg',
        firstName: 'Test Name',
        lastName: 'Test Last Name',
        mail: 'test@test.com',
        createdAt: '2021-10-21',
        role: 'admin',
    };
    return (
        <>
            <Meta title="Профіль користувача" />
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
        </>
    );
};

export default UserProfileEdit;
