import React from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { GetServerSideProps } from 'next';
import * as Yup from 'yup';

import { withAuthRedirect } from '../helpers/ssr.helper';
import { useAppDispatch } from '../hooks/redux.hook';
import useTrans from '../hooks/trans.hook';
import { UserRole } from '../interfaces';
import { authJoinThunk } from '../state/entities/auth/auth.thunk';

const JoinSchema = Yup.object().shape({
    firstName: Yup.string().min(1, 'short_input').max(50, 'long_input').required('required'),
    lastName: Yup.string().min(1, 'short_input').max(100, 'long_input').required('required'),
    email: Yup.string().email('invalid_email').required('required'),
    password: Yup.string()
        .min(6, 'short_password')
        .max(30, 'long_password')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_#?!@$%^&*-]).{6,}$/, 'invalid_password')
        .required('required'),
});

const JoinPage = (): JSX.Element => {
    const trans = useTrans();
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: 'user2@email.com',
            password: 'Asdf1234!',
            role: UserRole.USER,
        },
        validationSchema: JoinSchema,
        onSubmit: values => {
            dispatch(authJoinThunk(values));
        },
    });

    return (
        <form className="registration_form" onSubmit={formik.handleSubmit}>
            <Typography sx={{ marginBottom: '30px' }} variant="h1" fontSize={24} fontWeight={'bold'}>
                Join
            </Typography>
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="firstName">
                    Ім&apos;я
                </FormLabel>
                <TextField name="firstName" id="firstName" value={formik.values.firstName} onChange={formik.handleChange} />
            </FormControl>

            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="lastName">
                    Прізвище
                </FormLabel>
                <TextField name="lastName" id="lastName" value={formik.values.lastName} onChange={formik.handleChange} />
            </FormControl>

            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="email">
                    Електронна адреса
                </FormLabel>
                <TextField name="email" type="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
            </FormControl>

            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                <FormLabel sx={{ marginBottom: '10px' }} htmlFor="password">
                    Пароль
                </FormLabel>
                <TextField
                    name="password"
                    type="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </FormControl>

            <FormControl fullWidth>
                <FormLabel sx={{ marginBottom: '10px' }} id="role">
                    Роль на сайті
                </FormLabel>

                <Select labelId="role" id="role" name="role" value={formik.values.role} onChange={formik.handleChange}>
                    <MenuItem value={UserRole.USER}>Користувач</MenuItem>
                    <MenuItem value={UserRole.ADMIN}>Власник закладу</MenuItem>
                </Select>
            </FormControl>
            <Button sx={{ marginTop: '20px' }} variant="contained" size="large" type="submit">
                Зареєструватися
            </Button>
        </form>
    );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect(null, true);

export default JoinPage;
