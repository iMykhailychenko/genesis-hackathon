import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch } from '../hooks/redux.hook';
import useTrans from '../hooks/trans.hook';
import { UserRole } from '../interfaces';
import { authJoinThunk } from '../state/entities/auth/auth.thunk';
import { GetServerSideProps } from 'next';
import { withAuthRedirect } from '../helpers/ssr.helper';

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
        <form onSubmit={formik.handleSubmit}>
            <Typography variant="h1" fontSize={28} fontWeight={'bold'}>
                Log in
            </Typography>
            <FormControl>
                <FormLabel htmlFor="firstName">First name</FormLabel>
                <Input id="email" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="lastName">Last name</FormLabel>
                <Input id="email" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="role">Роль на сайті</InputLabel>
                <Select
                    labelId="role"
                    id="role"
                    name="role"
                    value={formik.values.role}
                    label="Роль на сайті"
                    onChange={formik.handleChange}
                >
                    <MenuItem value={UserRole.USER}>Користувач</MenuItem>
                    <MenuItem value={UserRole.ADMIN}>Власник закладу</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit">Sign Up</Button>
        </form>
    );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect(null, true);

export default JoinPage;
