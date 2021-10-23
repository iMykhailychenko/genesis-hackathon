import React from 'react';

import { observer } from 'mobx-react-lite';

import { useStore } from '../hooks/store.hook';

const Home = observer((): JSX.Element => {
    const store = useStore();

    return (
        <div>
            <h2>test for heroku</h2>
            <p>{JSON.stringify(store || {})}</p>
        </div>
    );
});

export default Home;
