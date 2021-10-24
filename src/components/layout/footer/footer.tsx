import React from 'react';

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Footer = (): JSX.Element => {
    return (
        <footer>
            <Box bgcolor='primary.main' sx={{ height:35 }}>
            <Container maxWidth="md" sx={{display: 'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                
            <Typography color="primary.contrastText">
                    Made with love by Анигиляторная Пушка
                </Typography>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;
