import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import InfoItem from './InfoItem';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import styled from '@emotion/styled';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Info = () => {
    return (
        <Grid item container justifyContent="space-between" sx={{ height: "calc(100% - 12rem)" }} >
            <Grid item xs={3.5} sx={{ textAlign: "center" }}>
                <LightModeOutlinedIcon color='primary' />
                <Typography variant="h6" color="primary" textAlign="center"> Example</Typography>
                <InfoItem text='Explain what is ccp a nd adsad asd lasf asf' righticon />
                <InfoItem text='Explain what is ccp a nd adsad asd lasf asf' righticon />
                <InfoItem text='Explain what is ccp a nd adsad asd lasf asf' righticon />
            </Grid>
            <Grid item xs={3.5} sx={{ textAlign: "center" }}>
                <ElectricBoltIcon color='primary' />
                <Typography variant="h6" color="primary" textAlign="center"> Example</Typography>
                <InfoItem text='Explain what is ccp a nd adsad asd lasf asf' righticon />
                <InfoItem text='Explain what is ccp a nd adsad asd lasf asf' righticon />
                <InfoItem text='Explain what is ccp a nd adsad asd lasf asf' righticon />
            </Grid>
            <Grid item xs={3.5} sx={{ textAlign: "center" }}>
                <WarningAmberIcon color='primary' />
                <Typography variant="h6" color="primary" textAlign="center"> Example</Typography>
                <InfoItem text='Explain what is ccp a nd adsad asd lasf asf' righticon />
                <InfoItem text='Explain what is ccp a nd adsad asd lasf asf' righticon />
                <InfoItem text='Explain what is ccp a nd adsad asd lasf asf' righticon />
            </Grid>
        </Grid>

    );
}

export default Info;
