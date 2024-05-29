import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import SideBarItem from './SideBarItem';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';

const MuiButton = styled(Button)({
    textAlign: "start",
    textTransform: "none",
    display: "flex",
    justifyContent: "flex-start"
})
const LeftSideBar = () => {


    const nume = Array.from({ length: 2 })
    return (
        <Box sx={{
            // position: "fixed",
            top: 0,
            background: "rgba(32,33,35,1)",
            left: 0,
            width: 260,
            // width: "20%",
            height: "100%",
            color: "white",
            px: 0.8,
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>

                <MuiButton sx={{ mt: 0.7, py: 1.3, "&:hover": { backgroundColor: "rgba(86,88,105,1)", border: "1px solid rgba(86,88,105,1)" } }} startIcon={<AddIcon />} style={{ textAlign: "left" }} variant='outlined' fullWidth>New Chat</MuiButton>

                <Box sx={{
                    height: "100%",
                    overflow: "auto",
                    // scrollbarWidth: "thin",
                    // scrollbarColor: "rgba(255,255,255,0.1) rgba(32,33,35,0.1)",
                }}>

                    <Box mt={0.5} mb={0.7}>
                        <SideBarItem text='first something somehng dsaf fsdf ds fds afds fsd fsd fd' selected />
                    </Box>

                    {nume.map((_, index) => (
                        <Box mt={0.5} mb={0.7}>
                            <SideBarItem text='first something somehng das dagdsf hjhk gyj ' />
                        </Box>
                    ))}

                </Box>
                <Box sx={{ borderTop: "1px solid rgba(86,88,105,1)" }}>
                    <Box mt={0.5} mb={0.7}>
                        <SideBarItem text='Area to show any Info' startIcon={<EditAttributesIcon color='primary' />} />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <SideBarItem text='Area to show any Info' startIcon={<EditAttributesIcon color='primary' />} />

                    </Box>
                </Box>

            </Box>

        </Box>
    );
}

export default LeftSideBar;
