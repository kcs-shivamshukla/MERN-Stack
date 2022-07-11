import { Box, Typography } from '@mui/material'
import React from 'react'
import SingleChat from './SingleChat';

interface ChatBoxProps {
  fetchAgain: boolean,
  setfetchAgain: boolean
}

function ChatBox({fetchAgain, setfetchAgain}: ChatBoxProps) {
  return (
    <div>
      <Box sx={{ width:"1111px",backgroundColor:"white"}}>
         
        <SingleChat  fetchAgain={fetchAgain} setfetchAgain={setfetchAgain}/>
        </Box></div>
  )
}

export default ChatBox