import React from 'react';

import CardList from '../components/common/card-list/card-list';
import Filters from '../components/filters/Filters';
import Banner from '../components/pages/home/banner';

const Home = (): JSX.Element => {
    return (
        <>
            <Banner />
            <CardList />
        </>
    );
};

export default Home;
