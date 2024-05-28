import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const SideBarItem = ({ selected, text, startIcon, endIcon }: { selected?: boolean, text: string, startIcon?: ReactNode, endIcon?: ReactNode }) => {
  return (
    <ListItem disablePadding sx={{ "&:hover": { background: "rgba(86,88,105,1)", borderRadius: 1 }, overflow: "hidden", backgroundColor: selected ? "rgba(86,88,105,1)" : undefined }}>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
          {startIcon || (

            <ChatBubbleOutlineIcon fontSize='small' color='primary' />
          )}
        </ListItemIcon>
        <ListItemText primary={<Typography sx={{ whiteSpace: "nowrap", overflow: "hidden", fontSize: "0.875rem", width: "100%" }}>{text}</Typography>} />
        {endIcon}

        {selected && (
          <ListItemIcon sx={{ minWidth: 0, ml: 1 }}>
            <EditIcon fontSize='small' color='primary' />
            <DeleteIcon fontSize='small' color='primary' />
          </ListItemIcon>
        )}
      </ListItemButton>
    </ListItem>
  );
}

export default SideBarItem;
