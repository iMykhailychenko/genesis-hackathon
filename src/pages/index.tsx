import React from 'react';

import Link from 'next/link';

const Home = (): JSX.Element => {
    return (
        <div>
            <Link href="home">
                <a>to home</a>
            </Link>

            <Link href="posts/234543245">
                <a>to post 234543245</a>
            </Link>
        </div>
    );
};

export default Home;
