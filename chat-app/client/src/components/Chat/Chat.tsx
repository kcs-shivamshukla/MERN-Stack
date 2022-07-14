import React, { useEffect, useState } from 'react';
import { Row, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './styles.scss';
import { User } from '../../constants/interface';
import ChatInput from './ChatInput';
import ChatContent from './ChatContent';
import {sendChat, getAllChats} from '../../api/index';

interface ChatProps {
  activeChat: User,
  loggedUser: User
}


export default function Chat(props: ChatProps) {

  const { activeChat, loggedUser } = props
  const navigate = useNavigate();

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const allChats = async() => {
      const chatDetails = {
        from: loggedUser._id,
        to: activeChat._id
      }
      const { data } = await getAllChats(chatDetails);
      console.log(data);
      setChats(data)
    }
    allChats();
  },[activeChat._id, loggedUser._id])

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }

  const handleChat = async (chatMsg: string) => {
   try {
    const chatContent = {
       from : loggedUser._id,
       to :activeChat._id,
       chat: chatMsg
    }
    const { data } = await sendChat(chatContent);
    alert(JSON.stringify(data.message));
   }
   catch(error) {
    console.log(error)
   }
  }

  return (
    <div className='chat__container'>
      <Row className='d-flex justify-content-between align-items-center my-2 chat__userDetailsContainer'>
        <div className='d-flex align-items-center chat__userDetails'>
          <Image src={process.env.PUBLIC_URL + '/images/Multiavatar-ETH.png'} className="chat__userImg" />
          <div className='d-flex flex-column ml-3'>
            <h2 className='chat__userDetails--name'>{activeChat.fullName}</h2>
            <div>
              <h6 className='chat__userDetails--status'>Online</h6>
            </div>
          </div>
        </div>
        <div className='chat__userOptions d-flex align-items-center'>
          <div className='mx-2 chat__userOptions--name'>
            {loggedUser.fullName.charAt(0)}
          </div>

          <button className='chat__btn mx-2' onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c3c6cf" className="bi bi-box-arrow-right mr-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
            </svg>
          </button>
        </div>

      </Row>
      <ChatContent chats = {chats} loggedUser = {loggedUser}/>
      
      <ChatInput handleChat={handleChat}/>
    </div>
  )
}

