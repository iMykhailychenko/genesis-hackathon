import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { IPost } from '../../store/entities/post/post.interface';

import RatingComponent from './components/rating';
import ReviewsComponent from './components/reviews';

interface Props {
    value: IPost;
}

const CardItem = ({ value }: Props): JSX.Element => (
    <Card sx={{ display: 'flex', borderRadius: '12px', mb: 3 }}>
        <CardMedia component="img" sx={{ width: 160 }} image="" alt="" />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Typography component="h3" variant="h4" gutterBottom>
                    {value.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span>tags</span>
                </Typography>
                <Typography variant="body2">{value.description}</Typography>
                <Box sx={{ display: 'flex', mt: 2, flexWrap: 'wrap' }}>
                    <RatingComponent value={value.rating} />
                    <ReviewsComponent />
                </Box>
            </CardContent>
        </Box>
    </Card>
);

export default CardItem;
