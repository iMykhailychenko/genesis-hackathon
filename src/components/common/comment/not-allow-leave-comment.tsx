import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const NotAllowToLeaveComment = (): JSX.Element => {
    return (
        <Box>
            <Typography>Вы не можете оставить коментарий</Typography>
            <Typography>
                <Link href="/login">Войдите </Link>
                или
                <Link href="/join"> Зарегестрируйтесь</Link>
            </Typography>
        </Box>
    );
};

export default NotAllowToLeaveComment;
