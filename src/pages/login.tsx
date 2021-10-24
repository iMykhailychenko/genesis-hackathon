import { useState } from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useAuth } from '../context/auth/auth';

const LoginPage: React.FC = () => {
    const { login, register } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e: any) => {
        e.preventDefault();
        // Log in or Register here
        login(email, password);
        // register(email, password)
    };
    return (
        <form className="login_form" onSubmit={handleLogin}>
            <Typography sx={{ marginBottom: '40px' }} variant="h1" fontSize={24} fontWeight={'bold'}>
                Log in
            </Typography>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="email">
                    Email
                </FormLabel>
                <TextField type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="email">
                    Password
                </FormLabel>
                <TextField type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormControl>
            <Button variant="contained" size="large" type={'submit'}>
                Log In
            </Button>
        </form>
    );
};

export default LoginPage;
