import React, { useState } from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';

import css from './filters.module.scss';

const Filters = (): JSX.Element => {
    const [search, setSearch] = useState<string>();
    const [rating, setRating] = useState<number | null>(0);
    // const [price, setPrice] = useState<string>();
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
            <div className={css.filters}>
                <div className={css.filters_title}>Фильтрация</div>
                <div className={css.filters_content}>
                    <div className={css.search}>
                        <TextField
                            value={search}
                            onChange={handleSearch}
                            id="outlined-basic"
                            label="Поиск по имени"
                            variant="outlined"
                        />
                    </div>
                    <div className={css.rating}>
                        <InputLabel id="demo-simple-select-label">Рейтинг заведения</InputLabel>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </div>
                    <div className={css.price}>
                        <InputLabel id="demo-simple-select-label">Средний чек</InputLabel>
                        <FormGroup>
                            <FormControlLabel sx={{ height: '25px' }} control={<Checkbox size="small" />} label="$" />
                            <FormControlLabel sx={{ height: '25px' }} control={<Checkbox size="small" />} label="$$" />
                            <FormControlLabel sx={{ height: '25px' }} control={<Checkbox size="small" />} label="$$$" />
                        </FormGroup>
                    </div>

                    <div className={css.animals}>
                        <InputLabel id="demo-simple-select-label">Можно с животными</InputLabel>
                        <Checkbox size="small" />
                    </div>

                    <div className={css.place_type}>
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
            <div className={css.sorting}>
                <div className={css.sorting_title}>Сортировка по:</div>
                <div className={css.sorting_content}>
                    <div className={css.sort_form}>
                        <ul className={css.sort_list}>
                            <li className={css.sort_list__item}>
                                <input id="input-sort-0" type="radio" name="sort" value="name" />
                                <label htmlFor="input-sort-0">имени</label>
                            </li>
                            <li className={css.sort_list__item}>
                                <input id="input-sort-1" type="radio" name="sort" value="price" />
                                <label htmlFor="input-sort-1">рейтингу</label>
                            </li>
                            <li className={clsx(css.sort_list__item)}>
                                <input id="input-sort-2" type="radio" name="sort" value="customers_rating" />
                                <label htmlFor="input-sort-2">среднему чеку</label>
                            </li>
                            <li className={clsx(css.sort_list__item, css.direction)}>
                                <input id="input-sort-up" type="radio" name="direction" value="asc" />
                                <label htmlFor="input-sort-up" className={css.up}>
                                    <ArrowDropUpIcon sx={{ width: '30px', height: 'auto' }} />
                                    <span>по возрастанию</span>
                                </label>
                            </li>
                            <li className={clsx(css.sort_list__item, css.direction)}>
                                <input id="input-sort-down" type="radio" name="direction" value="desc" />
                                <label htmlFor="input-sort-down" className={css.down}>
                                    <ArrowDropDownIcon sx={{ width: '30px', height: 'auto' }} />
                                    <span>по убыванию</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            xx
        </>
    );
};

export default Filters;
