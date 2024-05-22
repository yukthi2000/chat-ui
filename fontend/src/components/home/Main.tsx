import { Box, Grid } from '@mui/material';
import React from 'react';
import LeftSideBar from './LetfSideBar';

const Main = () => {
    return (
        <Box>
            <Grid container>

            <Grid xs={2} sx={{position:"relative"}}><LeftSideBar /></Grid>

            <Grid xs={9}>Right</Grid>
            </Grid>
        </Box>
    );
}

export default Main;
