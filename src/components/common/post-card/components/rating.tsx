import * as React from 'react';

import Rating from '@mui/material/Rating';

interface Props {
    value: number;
}
const RatingComponent = ({ value }: Props): JSX.Element => <Rating name="read-only" value={value} readOnly />;

export default RatingComponent;
