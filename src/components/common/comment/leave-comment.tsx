import Box from '@mui/material/Box';

import CommentForm from './comment-form';
import UserCommentInfo from './user-info';

const LeaveComment = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <UserCommentInfo />
            <CommentForm />
        </Box>
    );
};

export default LeaveComment;
