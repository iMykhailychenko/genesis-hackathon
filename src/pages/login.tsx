import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { GetServerSideProps } from 'next';
import * as Yup from 'yup';

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
        <form action="#" method="post" onSubmit={formik.handleSubmit}>
            <Typography variant="h1" fontSize={28} fontWeight={'bold'}>
                Log in
            </Typography>
            <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="email">Password</FormLabel>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </FormControl>
            <Button type={'submit'}>Log In </Button>
        </form>
    );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect(null, true);

export default LoginPage;
