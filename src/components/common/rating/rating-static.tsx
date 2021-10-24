import React from 'react';

import Rating from '@mui/material/Rating';

interface IRating {
    rating: number;
}

const RatingStatic = ({rating}:IRating): JSX.Element => {
    return(
        <Rating name="read-only" value={rating} readOnly />
    )
};

export default RatingStatic;