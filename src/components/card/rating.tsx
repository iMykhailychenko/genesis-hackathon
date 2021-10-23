import * as React from 'react';
import Rating from '@mui/material/Rating';

const RatingComponent = ({ value }) => (
    <Rating name="read-only" value={value} readOnly />
);

export default RatingComponent;
