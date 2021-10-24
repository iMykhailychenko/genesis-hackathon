import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

import UserCommentInfo from './user-info';
import CommentForm from './comment-form';

const LeaveComment = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <UserCommentInfo />
            <CommentForm />
        </Box>
    );
};

export default LeaveComment;
