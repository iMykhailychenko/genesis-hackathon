import React from 'react';

import Container from '@mui/material/Container';

import PostCard from '../post-card/post-card';

import CARD_DATA from '../../../assets/data/card-data'; // must be removed

const CardList = (): JSX.Element => {
    return (
        <Container maxWidth="md" sx={{mt:2}}>
        {
            CARD_DATA.map((cardProps, i) => {
                return <PostCard key={i} {...cardProps}/>
            })
        }
        </Container>

    );
};

export default CardList;
