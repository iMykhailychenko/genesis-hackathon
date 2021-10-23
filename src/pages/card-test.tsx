import React from 'react';

import CardItem from '../components/card/card-item';

import CARD_DATA from '../components/card/card-data';

const CardCollection = (): JSX.Element => {
    return (
        <div className="collection-preview">
            <div className="preview">
                <CardItem
                    title="Ресторан"
                    imgAlt="ресторан"
                    tags={["Кафе", "Закусочная"]}
                    description={'Самое лучше кафе. Вкусное кофе, свежые круассаны'}
                    numReviews={35}
                    ratingValue={3}
                    imgUrl="https://cdn.pixabay.com/photo/2016/02/19/11/40/coffee-shop-1209863_960_720.jpg"
                />
                <CardItem
                    title="Ресторан"
                    imgAlt="ресторан"
                    imgUrl="https://cdn.pixabay.com/photo/2016/02/19/11/40/coffee-shop-1209863_960_720.jpg"
                />
                <CardItem
                    title="Ресторан"
                    imgAlt="ресторан"
                    imgUrl="https://cdn.pixabay.com/photo/2016/02/19/11/40/coffee-shop-1209863_960_720.jpg"
                />
            </div>
        </div>
    );
};

export default CardCollection;
