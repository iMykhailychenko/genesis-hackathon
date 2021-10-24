import React, { useState } from 'react';

import { ThemeProvider } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { selectTheme } from '../layout/theme/theme';

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
                <div className={css.filters_title}>Фільтрація</div>
                <div className={css.search}>
                    <TextField
                        value={search}
                        onChange={handleSearch}
                        id="outlined-basic"
                        label="Поиск по имени"
                        variant="outlined"
                        sx={{ width: '100%' }}
                    />
                </div>
                <div className={css.filters_content}>
                    <div className={css.filter_wrapper}>
                        <div className={css.rating}>
                            <InputLabel sx={{ marginBottom: '10px' }} id="demo-simple-select-label">
                                Рейтинг закладу
                            </InputLabel>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                        </div>
                        <div className={css.price}>
                            <InputLabel sx={{ marginBottom: '10px' }} id="demo-simple-select-label">
                                Середній чек
                            </InputLabel>
                            <FormGroup>
                                <FormControlLabel sx={{ height: '25px' }} control={<Checkbox size="small" />} label="$" />
                                <FormControlLabel sx={{ height: '25px' }} control={<Checkbox size="small" />} label="$$" />
                                <FormControlLabel sx={{ height: '25px' }} control={<Checkbox size="small" />} label="$$$" />
                            </FormGroup>
                        </div>
                    </div>

                    <div className={css.filter_wrapper}>
                        <div className={css.animals}>
                            <InputLabel sx={{ marginBottom: '10px' }} id="demo-simple-select-label">
                                Можна з тваринами
                            </InputLabel>
                            <Checkbox size="small" />
                        </div>

                        <div className={css.place_type}>
                            <InputLabel sx={{ marginBottom: '10px' }} id="demo-simple-select-label">
                                Тип закладу
                            </InputLabel>
                            <ThemeProvider theme={selectTheme}>
                                <Select
                                    sx={{ width: '100%' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={place}
                                    onChange={handlePlace}
                                >
                                    <MenuItem value="Кафе">Кафе</MenuItem>
                                    <MenuItem value="Ресторан">Ресторан</MenuItem>
                                    <MenuItem value="Кофейня">Кав&apos;ярня</MenuItem>
                                    <MenuItem value="Пиццерия">Піццерія</MenuItem>
                                    <MenuItem value="Бар">Бар</MenuItem>
                                </Select>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filters;
