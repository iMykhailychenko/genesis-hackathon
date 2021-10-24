import React, { createContext } from 'react';

import axios from 'axios';
import cookie from 'cookie';
import Cookies from 'js-cookie';
import { GetServerSidePropsContext } from 'next';
import router from 'next/router';

import { IAuth } from '../../interfaces/auth';

const AuthContext = createContext({});

export const getUser = async (
    ctx: GetServerSidePropsContext,
): Promise<{ status: string; user: unknown } | { status: string; user: null }> => {
    const token = cookie.parse(ctx?.req?.headers?.cookie || '').accessToken || Cookies.get('accessToken');

    return await axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
        headers: { Authorization: token ? `Bearer ${token}` : '' },
    })
        .then(response => {
            if (response.data) {
                return { status: 'SIGNED_IN', user: response.data };
            } else {
                return { status: 'SIGNED_OUT', user: null };
            }
        })
        .catch(() => {
            return { status: 'SIGNED_OUT', user: null };
        });
};

interface Props {
    myAuth: IAuth;
    children: JSX.Element[] | JSX.Element;
}

export const AuthProvider = (props: Props): JSX.Element => {
    const auth = props.myAuth || { status: 'SIGNED_OUT', user: null };
    const login = async (email: string, password: string) => {
        return await axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
                data: { email, password },
            })
            .then((res: any) => {
                Cookies.set('accessToken', res.data.accessToken);
                router.push('/');
            })
            .catch(error => {
                console.error(error, 'Incorrect email or password entered.)');
            });
    };
    const register = async (firstName: string, lastName: string, email: string, password: string) => {
        return await axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/users`,
            data: { firstName, lastName, email, password, role: ['user'] },
        })
            .then(() => {
                router.push('/');
                console.log('user registered');
            })
            .catch(error => {
                console.error(error.message);
            });
    };
    const logout = async () => {
        return await axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/logout`)
            .then(() => {
                router.push('/');
                console.log('user logged out');
            })
            .catch(error => {
                console.error(error.message);
            });
    };
    return <AuthContext.Provider value={{ auth, logout, register, login }} {...props} />;
};

export const useAuth: any = () => React.useContext(AuthContext);
export const AuthConsumer = AuthContext.Consumer;
