import React from 'react';

import { Button } from '@mui/material';
import { useS3Upload } from 'next-s3-upload';

const LoadAWSImage: React.FC<{ setImageUrl: (url: string) => void }> = ({ setImageUrl }) => {
    const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

    const handleFileChange = async (file: File) => {
        const { url } = await uploadToS3(file);
        setImageUrl(url);
    };

    return (
        <>
            <FileInput onChange={handleFileChange} />
            <Button onClick={openFileDialog}>Upload avatar</Button>
        </>
    );
};

export default LoadAWSImage;
