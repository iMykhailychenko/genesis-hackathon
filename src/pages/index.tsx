import React from 'react';

import CardList from '../components/common/card-list/card-list';
import Meta from '../components/meta/meta';
import Banner from '../components/pages/home/banner';

const Home = (): JSX.Element => {
    return (
        <>
            <Meta title="Головна" />
            <Banner />
            <CardList />
        </>
    );
};

export default Home;
