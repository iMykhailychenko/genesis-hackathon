import React from 'react';

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import RatingStatic from '../../rating/rating-static';
import Box from '@mui/material/Box';

import {IComment} from '../../../interfaces/comment';

const Comment = ({...props}:IComment): JSX.Element => {
    return (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={props.title} src={props.image} />
            </ListItemAvatar>
            <ListItemText
              primary={
                  <React.Fragment>
                      <Box sx={{display: 'flex', alignItems: 'center' }}>
                      <Typography>
                          {props.title}
                      </Typography>
                      < RatingStatic rating={props.rating}/>
                      </Box>
                  </React.Fragment>
              }
              secondary={props.text}
            />
          </ListItem>
      );
};

export default Comment;
