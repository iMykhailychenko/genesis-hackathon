import React, { FormEvent, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import LoadAWSImage from '../components/common/LoadAWSImage';
import { useAuth } from '../context/auth/auth';

const RegisterPage = (): JSX.Element => {
    const { register } = useAuth();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    const [image, setImageUrl] = useState('');

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        register(firstName, lastName, email, password, admin, image);
    };

    return (
        <form className="registration_form" onSubmit={handleLogin}>
            <Typography sx={{ marginBottom: '40px' }} variant="h1" fontSize={24} fontWeight={'bold'}>
                Join
            </Typography>
            <FormControl sx={{ width: '100%', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <Avatar src={image.length ? image : '/broken-image.jpg'} sx={{ width: 75, height: 75, marginBottom: '10px' }} />
                <LoadAWSImage setImageUrl={setImageUrl} />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="firstName">
                    First name
                </FormLabel>
                <TextField id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="lastName">
                    Last name
                </FormLabel>
                <TextField id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormControlLabel
                    id="admin"
                    control={<Checkbox value={admin} onChange={e => setAdmin(e.target.checked)} />}
                    label="Admin"
                />
            </FormControl>

            <Button variant="contained" size="large" type={'submit'}>
                Join
            </Button>
        </form>
    );
};

export default RegisterPage;
