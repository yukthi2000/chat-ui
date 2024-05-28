import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import InfoItem from './InfoItem';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import styled from '@emotion/styled';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Info from './Info';
import RightSideBarContainer from '../../shared/RightSideBarContainer';
import Chat from '../Chat';

const StyledTextField = styled(TextField)({
    background: "rgba(64,65,79,1)",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "none",
        }
    }
})

const RightSideBar = () => {
    return (
        <Grid container flexDirection="column" sx={{ height: "100vh", position: "absouter" }}>
            <Chat />

            {/* <Grid item sx={{ mt: "20vh", mb: 7 }}>
                <Typography variant='h4' fontWeight="bold" color="primary" textAlign="center">
                    Chat AI
                </Typography>
            </Grid>
            <RightSideBarContainer>

                <Info />
            </RightSideBarContainer> */}
            <RightSideBarContainer sx={{ mt: "auto" }}>

                <Grid item container flexDirection="column" sx={{ position: "relative", bottom: 0, width: "100%", height: "10rem", pt: 5 }}>
                    <StyledTextField placeholder='send message...' fullWidth
                        InputProps={{
                            endAdornment: <InputAdornment position="start"><SendOutlinedIcon color='primary' /></InputAdornment>,
                            style: { color: "rgba(255,255,255,1)" }
                        }} />
                    <Box sx={{ color: "hsla(0, 0%, 100%, 0.5)", mt: 1, fontSize: "0.75rem", pt: 1 }}>
                        dasdas das das das dasf sdf afg shjdfj fgkyfukl fykdu bcvsg
                    </Box>
                </Grid>
            </RightSideBarContainer>
        </Grid>
    );
}

export default RightSideBar;
