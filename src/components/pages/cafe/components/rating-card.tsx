import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';

import LeaveComment from '../../../common/comment/leave-comment';
import CommentsList from '../../../common/comment-list.tsx/comment-list';
import NotAllowToLeaveComment from '../../../common/comment/not-allow-leave-comment';

import COMMENT_DATA from '../../../../assets/data/comment-data'; // must be removed


interface Props {
    rating: number;
    rewies: number;
}

const RatingCard = ({ rating, rewies }: Props): JSX.Element => {


    return (
        <Card sx={{ flexGrow: 1, height: 'fit-content' }}>
            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mb:2}}>

                <Box sx={{ display: 'flex', mt: 2, alignItems: 'center' }}>
                    <Rating name="rating" value={rating} sx={{ ml: 2 }} size="large" readOnly />
                    <Typography variant="h5" color="text.secondary" sx={{ ml: 2 }}>
                        ({rewies} отзывов)
                    </Typography>
                </Box>
                <CommentsList comments={COMMENT_DATA} />
                    <LeaveComment />
                    <NotAllowToLeaveComment />
            </Container>
        </Card>
    );
};

export default RatingCard;
