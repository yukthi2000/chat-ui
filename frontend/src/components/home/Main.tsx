import { Box, Grid, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import React from 'react';
import LeftSideBar from './LetfSideBar';
import RightSideBar from './RightSideBar';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const MuiButton = styled(Button)({
    textAlign: "start",
    textTransform: "none",
    display: "flex",
    justifyContent: "center",
    width: "100%",
});

const Main = () => {

    const newChat = () => {
        window.location.href = "/";
    };

    return (
        <Box>
            <AppBar position="static" sx={{ height: "10vh" }}>
                <Toolbar>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",mt:1 }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h6" component="div">
                                Company Name
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ marginX: 1 }}>
                                |
                            </Typography>
                            <Typography variant="h6" component="div">
                                Logo
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '30%', justifyContent: 'flex-end' }}>
                            <Box sx={{ width: "60%", marginRight: '16px' }}>
                                <MuiButton
                                    sx={{
                                        color: "blue",
                                        border: "2px solid rgba(0,0,255,1)",
                                        borderRadius: 4,
                                        mt: 0.7,
                                        py: 1.3,
                                        "&:hover": {
                                            backgroundColor: "rgba(255,255,255,1)",
                                            border: "2px solid rgba(0,0,255,1)"
                                        },
                                        width: "100%",
                                        '@media (max-width: 600px)': {
                                            width: "100%",
                                        }
                                    }}
                                    startIcon={<BorderColorIcon />}
                                    variant='outlined'
                                    onClick={newChat}>
                                    New Chat
                                </MuiButton>
                            </Box>
                            <IconButton>

                            <AccountCircleIcon fontSize='large' />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Grid container sx={{ flexWrap: 'nowrap' }}>
                <Grid item sx={{ position: "relative" }}>
                    <LeftSideBar />
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                    <RightSideBar />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Main;
