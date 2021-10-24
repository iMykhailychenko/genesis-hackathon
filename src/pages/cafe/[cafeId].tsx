import React from 'react';

import CafeCard from '../../components/pages/cafe/cafe-card'

import CARD_DATA from '../../assets/data/card-data'; 

const CafePage = (): JSX.Element => {
    const CafeData = CARD_DATA[0];
    return (
        <CafeCard {...CafeData}/>
    );
};

export default CafePage;
