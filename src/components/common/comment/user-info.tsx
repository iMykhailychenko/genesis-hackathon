import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const UserCommentInfo = (): JSX.Element => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', mb:1}}>
                <Avatar alt="" src="" />
                <Typography sx={{ml:2, fontWeight: 600 }}>Иванов Иван</Typography>
            </Box>
        </>
    );
};

export default UserCommentInfo;
