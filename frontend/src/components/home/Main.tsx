import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import LeftSideBar from './LetfSideBar';
import RightSideBar from './RightSideBar';

const Main = () => {
    return (
        <Box>
            <Grid container>

                <Grid
                    //  xs={2} 
                    sx={{ position: "relative", width: "20%" }}><LeftSideBar /></Grid>

                {/* <Grid sx={{ width: "calc(100% - 20%)" }}><RightSideBar /></Grid> */}
                <Grid sx={{ width: "80%" }}>

                        <RightSideBar />
                </Grid>

            </Grid>
        </Box>
    );
}

export default Main;
