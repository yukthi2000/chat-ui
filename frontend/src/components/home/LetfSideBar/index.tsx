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
});

class History {
    conversationId!: string
    prompt!: string
}

const LeftSideBar = () => {
    const [history, setHistory] = useState<History[]>([]);
    const { conversationId } = useParams();
    const navigate = useNavigate();

    const loadHistory = useCallback(async () => {
        try {
            const historyData = await loadAllConversation();
            setHistory(historyData.history);
            console.log(typeof (historyData));

        } catch (err) {
            console.error("Failed to load conversations:", err);
        }
    }, []);

    useEffect(() => {
        loadHistory();
    }, [loadHistory]);

    useEffect(() => {
        console.log(history);
    }, [history]);

    const openConversation = (conversationId: string) => {
        navigate(`/${conversationId}`);
    };

    const newChat = () => {
        window.location.href = "/";
    };

    return (
        <Box sx={{
            top: 0,
            background: "rgba(222,222,222,1)",
            left: 0,
            width: 260,
            height: "100%",
            color: "black",
            px: 0.8,
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                {/* <MuiButton
                    sx={{
                        mt: 0.7, py: 1.3,
                        "&:hover": {
                            backgroundColor: "rgba(86,88,105,1)",
                            border: "1px solid rgba(86,88,105,1)"
                        }
                    }}
                    startIcon={<AddIcon />}
                    variant='outlined' fullWidth
                    onClick={newChat}>
                    New Chat
                </MuiButton> */}

                <Box sx={{
                    height: "100%",
                    overflow: "auto",
                }}>


                    {history.length > 0 ? (
                        history.map((h) => {
                            return (
                                <Box key={h.conversationId} mt={0.5} mb={0.7} onClick={() => openConversation(h.conversationId)}>
                                    <SideBarItem text={h.prompt} selected={h.conversationId === conversationId} />
                                </Box>
                            )
                        })
                    ) : (
                        <Typography>No conversations found.</Typography>
                    )}
                </Box>
                <Box sx={{ borderTop: "1px solid rgba(86,88,105,1)" }}>
                    <Box mt={0.5} mb={0.7}>
                        <SideBarItem text='Area to show any Info' startIcon={<EditAttributesIcon sx={{color:"black"}}/>} />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <SideBarItem text='Area to show any Info' startIcon={<EditAttributesIcon sx={{color:"black"}} />} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftSideBar;
