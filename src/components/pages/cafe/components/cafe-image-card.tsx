import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';

interface Props {
    image: string;
    title: string;
}

const CafeCardImg = ({image, title}: Props): JSX.Element => {
    return(

        <Card sx={{  flexGrow: 1, mr: 2 }}>
        <CardMedia component="img" sx = {{ maxHeight: 500 }} image={image} alt={title} />
            <CardContent>
                <Typography variant='h4'></Typography>
            </CardContent>
    </Card>
    )
};

export default CafeCardImg;