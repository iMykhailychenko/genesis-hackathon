import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

const CommentForm = (): JSX.Element => {
    return (
        <form>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField id="comment" label="Оставить коментарий" variant="outlined" />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                    <Rating name="no-value" value={null} />
                    <Button variant="contained">Отправить</Button>
                </Box>
            </Box>
        </form>
    );
};

export default CommentForm;
