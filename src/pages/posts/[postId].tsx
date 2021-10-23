import React from 'react';

import { useRouter } from 'next/router';

import useTrans from '../../hooks/trans.hook';

const INIT = (): JSX.Element => {
    const trans = useTrans();

    return <div>{trans('join')}</div>;
};

export default INIT;
