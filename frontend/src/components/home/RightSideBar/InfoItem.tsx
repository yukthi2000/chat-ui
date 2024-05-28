import { Button } from '@mui/material';
import React from 'react';

const InfoItem = ({ text, righticon }: { text: string, righticon?: boolean }) => {
    return (
        <Button sx={{ bgcolor: "hsla(0, 0%, 100%, 0.05)", my: 1, fontSize: ".875rem", textTransform: "none" }}>{text}{righticon && "-->"}</Button>
    );
}

export default InfoItem;
