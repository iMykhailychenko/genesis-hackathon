import React from 'react';

import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';

import CARD_DATA from '../../assets/data/card-data'; // must be removed
import PostCard from '../../components/common/post-card/post-card';
import Meta from '../../components/meta/meta';
// import { IUser } from '../../interfaces/user';

const UserProfile = (user1: any): JSX.Element => {
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
            <div className="profile">
                <div className="profile_avatar">
                    <Avatar sx={{ width: '200px', height: '200px' }} alt="avatar" src={user.avatar} />
                </div>

                <div className="profile_information">
                    <InputLabel id="demo-simple-select-label">Имя</InputLabel>
                    <div className="profile_information_text">{user.firstName}</div>
                    <InputLabel id="demo-simple-select-label">Фамилия</InputLabel>
                    <div className="profile_information_text">{user.lastName}</div>
                    <InputLabel id="demo-simple-select-label">Электронная почта</InputLabel>
                    <div className="profile_information_text">{user.mail}</div>
                    <InputLabel id="demo-simple-select-label">Роль</InputLabel>
                    <div className="profile_information_text">{user.role}</div>
                    <InputLabel id="demo-simple-select-label">Профиль создан</InputLabel>
                    <div className="profile_information_text">{user.createdAt}</div>

                    <Button variant="contained" size="large">
                        Редактировать профиль
                    </Button>
                </div>

                {user.role === 'admin' && (
                    <div className="admin_block">
                        <Divider />
                        <div className="admin_text">Посты созданные администратором:</div>
                        <div className="admin_posts">
                            {CARD_DATA.map((cardProps, i) => {
                                return <PostCard key={i} {...cardProps} />;
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserProfile;
