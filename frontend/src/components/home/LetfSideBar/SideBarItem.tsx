import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const SideBarItem = () => {
  return (
    <ListItem disablePadding sx={{ "&:hover": { background: "rgba(86,88,105,1)", borderRadius: 1 }, overflow: "hidden" }}>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 0, mr: 1.5 }}>
          <ChatBubbleOutlineIcon fontSize='small' color='primary' />
        </ListItemIcon>
        <ListItemText primary={<Typography sx={{ whiteSpace: "nowrap" }}>some text some text some text some text some text some text some text some text</Typography>} />
      </ListItemButton>
    </ListItem>
  );
}

export default SideBarItem;
