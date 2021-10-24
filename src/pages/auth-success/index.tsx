import React, { ReactElement } from 'react';

import LinkMui from '@mui/material/Link';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { withAuthRedirect } from '../../helpers/ssr.helper';

import css from './success.module.scss';

const ConfettiWrp = dynamic(() => import('../../components/common/confetti/confetti'), { ssr: false });

const AuthSuccessPage = (): ReactElement => {
    return (
        <>
            <ConfettiWrp />
            <div className={css.box}>
                <h2 className={css.title}>Вітаємо ви успішно зареєструвались</h2>
                <Link href="/">
                    <LinkMui className={css.link} underline="hover">
                        Повернутись на головну
                    </LinkMui>
                </Link>
                <Link href="/login">
                    <LinkMui className={css.link} underline="hover">
                        Авторизуватись
                    </LinkMui>
                </Link>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect(null, true);

export default AuthSuccessPage;
