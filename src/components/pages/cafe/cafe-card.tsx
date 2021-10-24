import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';

import CafeCardImg from './components/cafe-image-card';
import RatingCard from './components/rating-card';

import {IPost} from '../../../interfaces/post';

const CafeCard = ({...props}:IPost): JSX.Element => {
    return(
        <Container maxWidth="lg" sx={{mt:2}}>
            <Box>
            <Typography component="h2" variant="h3" gutterBottom>
                    {props.title} 
                </Typography> 
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.type}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
                    <CafeCardImg image={props.image} title={props.title} />
                    <RatingCard rating={props.rating} rewies={props.rewies}/>
            </Box>
        </Container>
    )
};

export default CafeCard;