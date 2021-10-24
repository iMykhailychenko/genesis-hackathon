import React from 'react';

import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = (): JSX.Element => {
    return (
        <footer>
            <Box bgcolor="primary.main" sx={{ height: 47 }}>
                <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Typography color="primary.contrastText">Made with love by Анигиляторная Пушка</Typography>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;
