import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import COMMENT_DATA from '../../../../assets/data/comment-data'; // must be removed
import CommentsList from '../../../common/comment-list.tsx/comment-list';
import RatingStatic from '../../../rating/rating-static';

interface Props {
    rating: number;
    rewies: number;
}

const RatingCard = ({ rating, rewies }: Props): JSX.Element => {
    return (
        <Card sx={{ flexGrow: 1 }}>
            <Container>
                <Box sx={{ display: 'flex', mt: 2, alignItems: 'center' }}>
                    <Rating name="rating" value={rating} sx={{ ml: 2 }} size="large" readOnly />
                    <Typography variant="h5" color="text.secondary" sx={{ ml: 2 }}>
                        ({rewies} отзывов)
                    </Typography>
                </Box>
                <CommentsList comments={COMMENT_DATA} />
            </Container>
        </Card>
    );
};

export default RatingCard;
