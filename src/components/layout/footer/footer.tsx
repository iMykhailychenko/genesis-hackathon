import React from 'react';

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <Container maxWidth="md">
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span>Made with love by Анигиляторная Пушка</span>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
