import { FormEvent, useState } from 'react';

import { Typography, FormControl, Input, FormLabel, Button } from '@mui/material';

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
        <form onSubmit={handleLogin}>
            <Typography variant="h1" fontSize={28} fontWeight={'bold'}>
                Log in
            </Typography>
            <FormControl>
                <FormLabel htmlFor="firstName">First name</FormLabel>
                <Input id="email" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="lastName">Last name</FormLabel>
                <Input id="email" value={lastName} onChange={e => setLastName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormControl>
            <Button type={'submit'}>Sign Up </Button>
        </form>
    );
};

export default RegisterPage;
