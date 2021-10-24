import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


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