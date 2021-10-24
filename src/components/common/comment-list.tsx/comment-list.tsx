import React from 'react';

import Container from '@mui/material/Container';
import List from '@mui/material/List';

import { IComment } from '../../../interfaces/comment';
import Comment from '../comment/comment';

interface Props {
    comments: IComment[];
}

const CommentsList = ({ comments }: Props): JSX.Element => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {comments.map((commentProps, i) => {
                return <Comment key={i} {...commentProps} />;
            })}
        </List>
    );
};

export default CommentsList;
