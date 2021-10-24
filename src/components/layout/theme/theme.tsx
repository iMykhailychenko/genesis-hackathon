import { createTheme } from '@mui/material/styles';

const THEME = createTheme({
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
  });

export default THEME;