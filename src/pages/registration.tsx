import { FormEvent, useState } from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useAuth } from '../context/auth/auth';

const RegisterPage = (): JSX.Element => {
    const { register } = useAuth();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        register(firstName, lastName, email, password);
    };

    return (
        <form className="registration_form" onSubmit={handleLogin}>
            <Typography sx={{ marginBottom: '40px' }} variant="h1" fontSize={24} fontWeight={'bold'}>
                Join
            </Typography>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="firstName">
                    First name
                </FormLabel>
                <TextField id="email" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="lastName">
                    Last name
                </FormLabel>
                <TextField id="email" value={lastName} onChange={e => setLastName(e.target.value)} />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormControl>
            <Button variant="contained" size="large" type={'submit'}>
                Join
            </Button>
        </form>
    );
};

export default RegisterPage;
