import React,{useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';
import { getusers } from '../../api';


export default function Dashboard() {

  
  const [users, setUsers] = useState([])

  const activeUser = localStorage.getItem("profile");
  const getAllUsers = async() => {
    const data = await getusers();
    console.log(data);
    // setUsers(data)
  }

  useEffect(() => {
    if(activeUser) {
      getAllUsers();
    }
  },[activeUser])

   return (
      <Container fluid>
        <Row style={{maxHeight: '100vh'}}>
          <Col md={3} className='py-4 px-4'>
            <Sidebar/>
          </Col>
          <Col md={9} className='px-4'>
            <Chat />
          </Col>
        </Row>
      </Container>
    )
  
}