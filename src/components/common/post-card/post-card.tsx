import React from 'react';

// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
//
// import RatingStatic from '../../rating/rating-static';

const PostCard = (): JSX.Element => {
    return (
        <Card sx={{ maxWidth: '100%', display: 'flex', mb: 2 }}>
            {/*<CardMedia component="img" sx={{ height: 140, maxWidth: 200 }} image={props.image} alt={props.title} />*/}
            {/*<Box sx={{ display: 'flex', flexDirection: 'column' }}>*/}
            {/*    <CardContent>*/}
            {/*        <Typography component="h3" variant="h4" gutterBottom>*/}
            {/*            {props.title}*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ mb: 1.5 }} color="text.secondary">*/}
            {/*            {props.type}*/}
            {/*        </Typography>*/}
            {/*        <Typography variant="body2">{props.description}</Typography>*/}
            {/*        <Box sx={{ display: 'flex', mt: 2, flexWrap: 'wrap' }}>*/}
            {/*            <RatingStatic rating={props.rating} />*/}
            {/*            <Typography color="text.secondary">({props.rewies} отзывов)</Typography>*/}
            {/*        </Box>*/}
            {/*    </CardContent>*/}
            {/*</Box>*/}
        </Card>
    );
};

export default PostCard;
