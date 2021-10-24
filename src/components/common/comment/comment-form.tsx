import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const CommentForm = (): JSX.Element => {
    return (
        <form>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <TextField id="comment" label="Оставить коментарий" variant="outlined" />
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1}}>
                    <Rating name="no-value" value={null} />
                    <Button variant="contained">Отправить</Button>
                    </Box>
                </Box>
        </form>
    );
};

export default CommentForm;
