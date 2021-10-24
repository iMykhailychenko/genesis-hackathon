import React, { ReactElement, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import './filters.module.scss';

export default function Filters(): ReactElement {
    const [search, setSearch] = useState<string>();
    const [rating, setRating] = useState<number | null>(0);
    const [price, setPrice] = useState<string>();
    const [place, setPlace] = useState<string>();

    const handleSearch = (e: { target: { value: string } }) => {
        setSearch(e.target.value);
        console.log(search);
    };

    const handlePlace = (e: { target: { value: React.SetStateAction<string | undefined> } }) => {
        setPlace(e.target.value);
    };

    return (
        <>
            <div className="filters">
                <div className="filters_title">Фильтрация</div>
                <div className="filters_content">
                    <div className="search">
                        <TextField
                            value={search}
                            onChange={handleSearch}
                            id="outlined-basic"
                            label="Поиск по имени"
                            variant="outlined"
                        />
                    </div>
                    <div className="rating">
                        <InputLabel id="demo-simple-select-label">Рейтинг заведения</InputLabel>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </div>
                    <div className="price">
                        <InputLabel id="demo-simple-select-label">Средний чек</InputLabel>
                        <label className="container" htmlFor="min">
                            $
                            <input className="price_checkbox" type="checkbox" id="min" name="min" />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" htmlFor="med">
                            $$
                            <input className="price_checkbox" type="checkbox" id="med" name="med" />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" htmlFor="max">
                            $$$
                            <input className="price_checkbox" type="checkbox" id="max" name="max" />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="place_type">
                        <InputLabel id="demo-simple-select-label">Тип заведения</InputLabel>
                        <Select
                            sx={{ minWidth: 120, maxWidth: 190 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={place}
                            onChange={handlePlace}
                        >
                            <MenuItem value="Кафе">Кафе</MenuItem>
                            <MenuItem value="Ресторан">Ресторан</MenuItem>
                            <MenuItem value="Кофейня">Кофейня</MenuItem>
                            <MenuItem value="Пиццерия">Пиццерия</MenuItem>
                            <MenuItem value="Бар">Бар</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="sorting">
                <div className="sorting_title">Сортировка по:</div>
                <div className="sorting_content">
                    <div className="sort-form">
                        <ul className="sort-list">
                            <li className="sort-list__item">
                                <input id="input-sort-0" type="radio" name="sort" value="name" />
                                <label htmlFor="input-sort-0">имени</label>
                            </li>
                            <li className="sort-list__item">
                                <input id="input-sort-1" type="radio" name="sort" value="price" />
                                <label htmlFor="input-sort-1">рейтингу</label>
                            </li>
                            <li className="sort-list__item default">
                                <input id="input-sort-2" type="radio" name="sort" value="customers_rating" />
                                <label htmlFor="input-sort-2">среднему чеку</label>
                            </li>
                            <li className="sort-list__item direction">
                                <input id="input-sort-up" type="radio" name="direction" value="asc" />
                                <label htmlFor="input-sort-up" className="up">
                                    <span>по возрастанию</span>
                                </label>
                            </li>
                            <li className="sort-list__item direction default">
                                <input id="input-sort-down" type="radio" name="direction" value="desc" />
                                <label htmlFor="input-sort-down" className="down">
                                    <span>по убыванию</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
