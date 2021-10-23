import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import RatingComponent from './rating';
import ReviewsComponent from './reviews';

const CardItem = ({ title, tags, description, imgAlt, imgUrl, ratingValue, numReviews }) => (
    <Card sx={{ display: 'flex', borderRadius: '12px', mb: 3 }}>
        <CardMedia component="img" sx={{ width: 160 }} image={imgUrl} alt={imgAlt} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Typography component="h3" variant="h4" gutterBottom>
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span>{tags}</span>
                </Typography>
                <Typography variant="body2">
                    {description}
                    <br />
                </Typography>
                <Box sx={{ display: 'flex', mt: 2, flexWrap: 'wrap'}}>
                    <RatingComponent value={ratingValue} />
                    <ReviewsComponent value={numReviews} />
                </Box>
            </CardContent>
        </Box>
    </Card>
);

export default CardItem;
