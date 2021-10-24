import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { PostProps } from '../../../interfaces/post';

const PostCard = ({ ...props }: PostProps): JSX.Element => {
    return (
        <Card sx={{ maxWidth: '100%', display: 'flex', mb: 2 }}>
            <CardMedia component="img" sx={{ height: 140, maxWidth: 200 }} image={props.image} alt={props.imageAlt} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography component="h3" variant="h4" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.type}
                    </Typography>
                    <Typography variant="body2">{props.description}</Typography>
                    <Box sx={{ display: 'flex', mt: 2, flexWrap: 'wrap' }}>
                        <Rating name="read-only" value={props.rating} readOnly />
                        <Typography color="text.secondary">({props.rewies} отзывов)</Typography>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
};

// const PostCard = (): JSX.Element => (
//     <Card sx={{ display: 'flex', borderRadius: '12px', mb: 3 }}>
//         <CardMedia component="img" sx={{ width: 160 }} image="" alt="" />
//         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//             <CardContent>
//                 <Typography component="h3" variant="h4" gutterBottom>
//                     title
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     <span>tags</span>
//                 </Typography>
//                 <Typography variant="body2">description</Typography>
//                 <Box sx={{ display: 'flex', mt: 2, flexWrap: 'wrap' }}>
//                     <RatingComponent value={0} />
//                     <ReviewsComponent />
//                 </Box>
//             </CardContent>
//         </Box>
//     </Card>
// );

export default PostCard;
