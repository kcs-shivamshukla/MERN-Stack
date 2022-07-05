import React, { useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { getusers } from '../../api';

import './styles.scss';

interface Users {
  fullName: string,
  email: string
}


function Sidebar() {

  const getAllUsers = async () => {
    try {
      const { data } = await getusers();
      setUsers(data);
    }
    catch (error) {
      console.log(error)
    }
  }

  const [users, setUsers] = useState<Users | []>([])

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <>
      <div className='sideBar__container'>
        <Row className='d-flex justify-content-between align-items-center sideBar__container--bg'>
          <h2 className='sideBar__text'>
            Chats
          </h2>
          <div>
            <button onClick={() => alert('Something')} style={{ border: 'none', outline: 'none', backgroundColor: '#fff' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c3c6cf" className="bi bi-chat-left-text-fill sideBar__icons" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
              </svg>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c3c6cf" className="bi bi-search sideBar__icons" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c3c6cf" className="bi bi-three-dots-vertical sideBar__icons" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
        </Row>

        {/* {users && users.map((user) => {
              return 
                (<Row className='mt-4'>
                <Col md={2}>
                  <Image src={process.env.PUBLIC_URL + '/images/Multiavatar-ETH.png'} className='sideBar__img' rounded />
                </Col>
                <Col md={8}>
                  <h5 className='sideBar__text--primary'>{user['fullName']}</h5>
                  <h6 className='sideBar__text--secondary'>Something</h6>
                </Col>
                <Col md={2}>
                  <h6 className='sideBar__text--secondary text-center'>4</h6>
                  <h6 className='sideBar__text--secondary text-center'>10:35</h6>
                </Col>
              </Row>)
        }
        } */}
      </div>
    </>
  )
}

export default Sidebar