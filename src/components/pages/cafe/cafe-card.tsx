import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import { IPost } from '../../../interfaces/post';

import CafeCardImg from './components/cafe-image-card';
import RatingCard from './components/rating-card';

const CafeCard = ({ ...props }: any): JSX.Element => {
    return (
        <Container maxWidth="lg" sx={{ mt: 2 }}>
            <Box>
                <Typography component="h2" variant="h3" gutterBottom>
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.type}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <CafeCardImg image={props.image} title={props.title} />
                <RatingCard rating={props.rating} rewies={props.rewies} />
            </Box>
        </Container>
    );
};

export default CafeCard;
