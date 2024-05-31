import { Box } from '@mui/material';
import React from 'react';
import ChatItem from './ChatItem';
import { IMessage } from '../../../globals/types';


interface IProps{
    messages :(IMessage | string)[];
}

const Chat = ({messages}:IProps) => {
    return (
        <Box sx={{ height: "calc(100% - 8rem)", overflow: "auto" }}>
{
    messages.map(msg=>{

        if (typeof msg === "string"){
            return <ChatItem key={msg} text={msg} />
        }
        
        return (
        <Box key={msg.messageId}>
          <ChatItem text={msg.prompt} />


        <Box sx={{ background: "rgba(255, 249, 255, 0.7)" }}>



            <ChatItem responseIcon text={msg.text}   />
            </Box>
        </Box>
        )

    })}
        </Box>
    );
}

export default Chat;
