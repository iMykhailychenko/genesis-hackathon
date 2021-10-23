import React from 'react';

import Link from 'next/link';

const Home = (): JSX.Element => {
    return (
        <div>
            <h2>test for heroku</h2>
            <div>
                <Link href="home">
                    <a>to home</a>
                </Link>
            </div>

            <div>
                <Link href="posts/234543245">
                    <a>to post 234543245</a>
                </Link>
            </div>
        </div>
    );
};

export default Home;
