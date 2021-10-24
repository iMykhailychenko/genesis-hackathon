import { FormEvent, useState } from 'react';

import { Typography, FormControl, Input, FormLabel, Button } from '@mui/material';

import { useAuth } from '../context/auth/auth';

const LoginPage = (): JSX.Element => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: FormEvent): void => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form onSubmit={handleLogin}>
            <Typography variant="h1" fontSize={28} fontWeight={'bold'}>
                Log in
            </Typography>
            <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="email">Password</FormLabel>
                <Input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormControl>
            <Button type={'submit'}>Log In </Button>
        </form>
    );
};

export default LoginPage;
