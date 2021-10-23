import * as React from 'react';
import Typography from '@mui/material/Typography';

const ReviewsComponent = ({value}) => (
    <Typography color="text.secondary">
        ({value} отзывов)
    </Typography>
);

export default ReviewsComponent;