import React from 'react';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useS3Upload } from 'next-s3-upload';

import { useAppDispatch } from '../../hooks/redux.hook';
import { DISTRICT_FILTERS, PRICE_FILTERS, RESTAURANT_TYPE_FILTERS } from '../../state/entities/posts/posts.interface';

const NewPost = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            pets: false,
            image: '',
            address: '',
            price: PRICE_FILTERS.LOW,
            district: DISTRICT_FILTERS.DARNYTSIA,
            restaurantType: RESTAURANT_TYPE_FILTERS.CAFE,
        },
        // validationSchema: JoinSchema,
        onSubmit: values => {
            // dispatch(authJoinThunk(values));
        },
    });

    const handleFileChange = async (file: File) => {
        const { url } = await uploadToS3(file);
        formik.setFieldValue('image', url);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 2 }}>
            <form action="#" method="post" onSubmit={formik.handleSubmit}>
                <FormControl sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '40px 0' }}>
                    {!formik.values.image ? (
                        <label htmlFor="icon-button-file">
                            <FileInput onChange={handleFileChange} />
                            <Button onClick={openFileDialog} variant="contained" endIcon={<CameraAltIcon />}>
                                Завантажити зображення
                            </Button>
                        </label>
                    ) : (
                        <img src={formik.values.image} alt="" />
                    )}
                </FormControl>

                <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                    <FormLabel sx={{ marginBottom: '10px' }} htmlFor="title">
                        Заголовок
                    </FormLabel>
                    <TextField
                        id="title"
                        name="title"
                        variant="outlined"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                </FormControl>

                <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                    <FormLabel sx={{ marginBottom: '10px' }} htmlFor="description">
                        Опис закладу
                    </FormLabel>
                    <TextField
                        id="description"
                        name="description"
                        variant="outlined"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        multiline
                    />
                </FormControl>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="pets"
                                color="primary"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                value={formik.values.pets}
                                onChange={formik.handleChange}
                            />
                        }
                        label="З тваринами"
                    />
                </FormGroup>

                <FormControl sx={{ width: '100%', marginBottom: '40px' }}>
                    <FormLabel sx={{ marginBottom: '10px' }} htmlFor="address">
                        Адреса
                    </FormLabel>
                    <TextField
                        id="address"
                        name="address"
                        variant="outlined"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                </FormControl>

                <FormControl sx={{ width: '100%', marginBottom: '40px' }}>
                    <InputLabel id="district">Ранйон міста</InputLabel>
                    <Select
                        id="district-id"
                        labelId="district"
                        label="Цінова категорія"
                        value={formik.values.district}
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={DISTRICT_FILTERS.DARNYTSIA}>{DISTRICT_FILTERS.DARNYTSIA}</MenuItem>
                        <MenuItem value={DISTRICT_FILTERS.DESNIANSKYI}>{DISTRICT_FILTERS.DESNIANSKYI}</MenuItem>
                        <MenuItem value={DISTRICT_FILTERS.DNIPROVSKYI}>{DISTRICT_FILTERS.DNIPROVSKYI}</MenuItem>
                        <MenuItem value={DISTRICT_FILTERS.OBOLONSKYI}>{DISTRICT_FILTERS.OBOLONSKYI}</MenuItem>
                        <MenuItem value={DISTRICT_FILTERS.PECHERSKYI}>{DISTRICT_FILTERS.PECHERSKYI}</MenuItem>
                        <MenuItem value={DISTRICT_FILTERS.PODIL}>{DISTRICT_FILTERS.PODIL}</MenuItem>
                        <MenuItem value={DISTRICT_FILTERS.SHEVCHENKIVSKYI}>{DISTRICT_FILTERS.SHEVCHENKIVSKYI}</MenuItem>
                        <MenuItem value={DISTRICT_FILTERS.SOLOMIANSKYI}>{DISTRICT_FILTERS.SOLOMIANSKYI}</MenuItem>
                        <MenuItem value={DISTRICT_FILTERS.SVIATOSHYNSKYI}>{DISTRICT_FILTERS.SVIATOSHYNSKYI}</MenuItem>=
                    </Select>
                </FormControl>

                <FormControl sx={{ width: '100%', marginBottom: '40px' }}>
                    <InputLabel id="price">Цінова категорія</InputLabel>
                    <Select
                        id="price-id"
                        labelId="price"
                        label="Цінова категорія"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={PRICE_FILTERS.LOW}>Низька</MenuItem>
                        <MenuItem value={PRICE_FILTERS.MID}>Середня</MenuItem>
                        <MenuItem value={PRICE_FILTERS.HIGH}>Висока</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ width: '100%', marginBottom: '40px' }}>
                    <InputLabel id="restaurantType">Цінова категорія</InputLabel>
                    <Select
                        id="restaurantType-id"
                        labelId="restaurantType"
                        label="Цінова категорія"
                        value={formik.values.restaurantType}
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.RESTAURANT}>{RESTAURANT_TYPE_FILTERS.RESTAURANT}</MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.BAR}>{RESTAURANT_TYPE_FILTERS.BAR}</MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.CAFE}>{RESTAURANT_TYPE_FILTERS.CAFE}</MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.CAFETERIA}>{RESTAURANT_TYPE_FILTERS.CAFETERIA}</MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.CAFETERIA}>{RESTAURANT_TYPE_FILTERS.CAFETERIA}</MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.CANTEEN}>{RESTAURANT_TYPE_FILTERS.CANTEEN}</MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.SNACK_BAR}>{RESTAURANT_TYPE_FILTERS.SNACK_BAR}</MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.BUFFET}>{RESTAURANT_TYPE_FILTERS.BUFFET}</MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.PROCUREMENT_FACTORIES}>
                            {RESTAURANT_TYPE_FILTERS.PROCUREMENT_FACTORIES}
                        </MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.KITCHEN_FACTORY}>
                            {RESTAURANT_TYPE_FILTERS.KITCHEN_FACTORY}
                        </MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.HOME_KITCHEN}>{RESTAURANT_TYPE_FILTERS.HOME_KITCHEN}</MenuItem>
                        <MenuItem value={RESTAURANT_TYPE_FILTERS.SPECIAL_ORDERS}>
                            {RESTAURANT_TYPE_FILTERS.SPECIAL_ORDERS}
                        </MenuItem>
                    </Select>
                </FormControl>

                <Button color="primary" type="submit">
                    Створити пост
                </Button>
            </form>
        </Container>
    );
};

export default NewPost;
