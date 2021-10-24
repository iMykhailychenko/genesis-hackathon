import React from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { GetServerSideProps } from 'next';
import * as Yup from 'yup';

import Meta from '../components/meta/meta';
import { withAuthRedirect } from '../helpers/ssr.helper';
import { useAppDispatch } from '../hooks/redux.hook';
import useTrans from '../hooks/trans.hook';
import { authLoginThunk } from '../state/entities/auth/auth.thunk';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('invalid_email').required('required'),
    password: Yup.string().min(6, 'short_password').max(30, 'long_password').required('required'),
});

const LoginPage = (): JSX.Element => {
    const trans = useTrans();
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: 'user2@email.com',
            password: 'Asdf1234!',
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            dispatch(authLoginThunk(values));
        },
    });

    return (
        <>
            <Meta title="Зареєструватись" />

            <form className="login_form" onSubmit={formik.handleSubmit}>
                <Typography sx={{ marginBottom: '40px' }} variant="h1" fontSize={24} fontWeight={'bold'}>
                    Log in
                </Typography>
                <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                    <FormLabel sx={{ marginBottom: '10px' }} htmlFor="email">
                        Електронна адреса
                    </FormLabel>
                    <TextField type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                </FormControl>
                <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                    <FormLabel sx={{ marginBottom: '10px' }} htmlFor="email">
                        Пароль
                    </FormLabel>
                    <TextField
                        type="password"
                        name="empasswordail"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </FormControl>
                <Button variant="contained" size="large" type={'submit'}>
                    Вхід
                </Button>
            </form>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect(null, true);

export default LoginPage;
