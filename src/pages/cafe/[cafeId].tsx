import React from 'react';

import CARD_DATA from '../../assets/data/card-data';
import CafeCard from '../../components/pages/cafe/cafe-card';


const CafePage = (): JSX.Element => {
    const CafeData = CARD_DATA[0];
    return <CafeCard props={CafeData}/>;
};

export default CafePage;
