import React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { IComment } from '../../../interfaces/comment';
import RatingStatic from '../rating/rating-static';

const Comment = ({ ...props }: IComment): JSX.Element => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={props.title} src={props.image} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <React.Fragment>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography>{props.title}</Typography>
                            <RatingStatic rating={props.rating} />
                        </Box>
                    </React.Fragment>
                }
                secondary={props.text}
            />
        </ListItem>
    );
};

export default Comment;
