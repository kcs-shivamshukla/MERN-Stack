import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';
import Welcome from '../Chat/Welcome';
import { getusers } from '../../api';
import { User } from '../../constants/interface';


export default function Dashboard() {


  const [users, setUsers] = useState([]);
  const [activeChat, setactiveChat] = useState<User>()

  const navigate = useNavigate();

  const getAllUsers = async () => {
    const response = await getusers();
    console.log(response.data);
    setUsers(response.data)
  }
  const localStorageValue = localStorage.getItem("profile");
  if (typeof localStorageValue === 'string') {
    var loggedUser = JSON.parse(localStorageValue).result;
  }

  //Use Effect 
  useEffect(() => {
    if (localStorageValue) {
      getAllUsers();
    }
    else {
      navigate("/")
    }
  }, [localStorageValue, navigate])


  //Change chat on sidebar 
  const handleActiveChatChange = (chat: User) => {
    setactiveChat(chat)
  }

  if(activeChat) console.log(activeChat)

  return (
    <Container fluid>
      <Row style={{ maxHeight: '100vh' }}>
        <Col md={3} className='py-4 px-3'>
          <Sidebar users={users} activeChat={handleActiveChatChange} loggedUser={loggedUser}/>
        </Col>
        <Col md={9} className='px-4'>
        {activeChat === undefined ? 
          <Welcome /> :
          <Chat activeChat = {activeChat} loggedUser={loggedUser}/>  
        }
        </Col>
      </Row>
    </Container>
  )

}