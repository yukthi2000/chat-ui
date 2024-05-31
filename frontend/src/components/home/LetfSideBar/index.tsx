import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SideBarItem from './SideBarItem';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import { loadAllConversation } from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

const MuiButton = styled(Button)({
    textAlign: "start",
    textTransform: "none",
    display: "flex",
    justifyContent: "flex-start"
})
const LeftSideBar = () => {
const[history,sethistory]=useState<{conversationId:string,prompt:string}[]>([]);
const {conversationId}=useParams();
const navigate = useNavigate();
const loadHistory=useCallback(async()=>{
    try{
        const history=await loadAllConversation();
    }catch(err){}
},[])


useEffect(()=>{
    loadHistory();
},[loadHistory])


const openConversation=(conversationId: string)=>{
    navigate(`/${conversationId}`)
}

const newChat=()=>{
    window.location.href="/"
}

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

                <MuiButton 
                sx={{ mt: 0.7, py: 1.3,
                 "&:hover": { backgroundColor: "rgba(86,88,105,1)",
                  border: "1px solid rgba(86,88,105,1)" } }} 
                  startIcon={<AddIcon />} style={{ textAlign: "left" }} 
                  variant='outlined' fullWidth
                  onClick={newChat}>New Chat</MuiButton>

                <Box sx={{
                    height: "100%",
                    overflow: "auto",
                    // scrollbarWidth: "thin",
                    // scrollbarColor: "rgba(255,255,255,0.1) rgba(32,33,35,0.1)",
                }}>


                    {history.map((h) => (
                        <Box key={h.conversationId} mt={0.5} mb={0.7} onClick={()=>openConversation(h.conversationId)}>
                            <SideBarItem text='first something somehng das dagdsf hjhk gyj '  selected={h.conversationId===conversationId} />
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
