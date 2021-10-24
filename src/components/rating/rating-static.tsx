import React from 'react';

import Rating from '@mui/material/Rating';

interface IRating {
    rating: number;
}

const RatingStatic = ({rating}:IRating): JSX.Element => {
    return(
        <Rating name="read-only" value={rating} sx={{ml: 2}} readOnly />
    )
};

export default RatingStatic;