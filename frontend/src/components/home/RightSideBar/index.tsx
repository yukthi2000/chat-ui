import { Box, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
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
    const inputtext = useRef<HTMLTextAreaElement>();
    const [showChat, setshowChat] = useState(false);
    const [submitText, setsubmitText] = useState("");



    const onSubmit = () => {
        const val = inputtext.current!.value;
        if (!val) return;

        setsubmitText(val)
        inputtext.current!.value = ""
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSubmit();

        }
    }


    return (
        <Grid container flexDirection="column" sx={{ height: "100vh", position: "relative" }}>

            {!!submitText ? (
                <Chat inputtext={submitText} />

            ) : (<>

                <Grid item sx={{ mt: { lg: "20vh", xs: 7 }, mb: 7 }}>
                    <Typography variant='h4' fontWeight="bold" color="primary" textAlign="center">
                        Chat AI
                    </Typography>
                </Grid>
                <RightSideBarContainer>

                    <Info />
                </RightSideBarContainer>
            </>)}



            <Grid item container flexDirection="column" sx={{
                position: "absolute",
                bottom: 0,
                width: "100%", height: "12rem",
                //   pt: 5
            }}>
                <RightSideBarContainer sx={{ mt: "auto" }}>

                    <StyledTextField
                        placeholder='send message...' fullWidth
                        multiline
                        inputRef={inputtext}
                        maxRows={4}
                        onKeyDown={handleKeyDown}
                        sx={{ mt: "auto" }}
                        InputProps={{
                            style: { color: "rgba(255,255,255,1)" },
                            endAdornment: <InputAdornment position="start">
                                <IconButton onClick={onSubmit} >
                                    <SendOutlinedIcon color='primary' />
                                </IconButton>
                            </InputAdornment>,

                        }} />


                    <Box sx={{ color: "hsla(0, 0%, 100%, 0.5)", mt: 1, fontSize: "0.75rem", pt: 1 }}>
                        dasdas das das das dasf sdf afg shjdfj fgkyfukl fykdu bcvsg
                    </Box>
                </RightSideBarContainer>

            </Grid>
        </Grid>
    );
}

export default RightSideBar;
