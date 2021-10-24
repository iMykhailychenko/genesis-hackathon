import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RatingStatic from '../../common/rating/rating-static';
import Link from 'next/link';

import css from './post-card.module.scss';

import { IPost } from '../../../interfaces/post';

const PostCard = ({ ...props }: IPost): JSX.Element => {
    return (
        <Link  href={`/cafe/${props.id}`} >

            <Card className={css.link} sx={{ maxWidth: '100%', display: 'flex', flexWrap: 'wrap', mb: 2, minHeight: 200 }}>
                <CardMedia component="img" sx={{ objectFit: 'cover', maxWidth: 250 }} image={props.image} alt={props.title} />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                    <CardContent >
                        <Typography component="h3" variant="h4" gutterBottom>
                            {props.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {props.type}
                        </Typography>
                        <Typography variant="body2">{props.description}</Typography>
                        <Box sx={{ display: 'flex', mt: 2, flexWrap: 'wrap' }}>
                            <RatingStatic rating={props.rating} />
                            <Typography color="text.secondary">({props.rewies} отзывов)</Typography>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Link>
    );
};

export default PostCard;
