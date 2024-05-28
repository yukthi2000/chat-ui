import React from 'react';
import RightSideBarContainer from '../../shared/RightSideBarContainer';
import { Box, Grid, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

const ChatItem = ({ responseIcon,text }: { responseIcon?: boolean;text:string, }) => {
    return (
        <RightSideBarContainer sx={{p:3}}>
            <Grid container>
                <Grid item xs={0.8}>
                    {responseIcon ? <SmsOutlinedIcon htmlColor='#10a37f' /> :

                        <AccountCircleOutlinedIcon htmlColor='#10a37f' />
                    }
                </Grid>
                <Grid item xs={11}>
                    <Typography color='primary' sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{text}</Typography>
                </Grid>
            </Grid>
        </RightSideBarContainer>
    );
}

export default ChatItem;


