import { Container, SxProps } from '@mui/material';
import React, { ReactNode } from 'react';

const RightSideBarContainer = ({sx={},children}:{sx?:SxProps;children:ReactNode| ReactNode[]}) => {
    return (
        <Container sx={{ width: { md: "36rem", lg: "53rem" },...sx }} > 
        {children}

        </Container>

    );
}

export default RightSideBarContainer;
