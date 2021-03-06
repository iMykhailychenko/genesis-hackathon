import { createTheme } from '@mui/material/styles';

export const THEME = createTheme({
    palette: {
        primary: {
            light: '#5c5c5c',
            main: '#333333',
            dark: '#0c0c0c',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fffff4',
            main: '#f4e8c1',
            dark: '#c1b691',
            contrastText: '#000',
        },
    },
    components: {
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: 'white',
                },
                iconStandard: {
                    color: 'white',
                },
            },
        },
    },
});

export const selectTheme = createTheme({
    components: {
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: 'black',
                },
                iconStandard: {
                    color: 'black',
                },
            },
        },
    },
});
