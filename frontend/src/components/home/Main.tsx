import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import LeftSideBar from './LetfSideBar';
import RightSideBar from './RightSideBar';

const Main = () => {
    return (
        <Box>
            <Grid container sx={{ flexWrap: 'nowrap' }}>

                <Grid item
                    // xs={2}
                    sx={{ position: "relative" }}><LeftSideBar /></Grid>

                {/* <Grid sx={{ width: "calc(100% - 20%)" }}><RightSideBar /></Grid> */}
                <Grid item sx={{ width: "100%" }}>

                    <RightSideBar />
                </Grid>

            </Grid>
        </Box>
    );
}

export default Main;
