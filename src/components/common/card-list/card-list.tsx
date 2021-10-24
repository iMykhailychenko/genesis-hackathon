import React from 'react';

import { Pagination } from '@mui/material';
import Container from '@mui/material/Container';

import CARD_DATA from '../../../assets/data/card-data'; // must be removed
import PostCard from '../post-card/post-card';

import css from './card-list.module.scss';

const CardList = (): JSX.Element => {
    return (
        <Container maxWidth="md" sx={{ mt: 2 }}>
            {CARD_DATA.map((cardProps, i) => {
                return <PostCard key={i} {...cardProps} />;
            })}
            <div className={css.pagination_container}>
                <Pagination
                    count={11}
                    onChange={(e, pageNumber) => {
                        // pageNumber
                    }}
                    boundaryCount={2}
                />
            </div>
        </Container>
    );
};

export default CardList;
