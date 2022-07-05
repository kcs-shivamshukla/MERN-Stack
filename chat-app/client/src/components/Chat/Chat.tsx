import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';

import './styles.scss';


function Chat() {

  const profile = JSON.parse(localStorage.getItem("profile") || "").result

  return (
    <div className='chat__container'>
      <Row className='d-flex justify-content-between align-items-center my-2 chat__userDetailsContainer'>
        <div className='d-flex align-items-center chat__userDetails'>
          <Image src={process.env.PUBLIC_URL + '/images/Multiavatar-ETH.png'} className="chat__userImg" />
          <div className='d-flex flex-column ml-3'>
            <h2 className='chat__userDetails--name'>{profile.fullName}</h2>
            <div>
              <h6 className='chat__userDetails--status'>Online</h6>
            </div>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c3c6cf" className="bi bi-search sideBar__icons" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </Row>
      <Row className='chat__detailsContainer'>
        
      </Row>
      <Row className='chat__inputContainer'>
        <Col md={11}>
          <input className='chat__input' type="text" name="msg" id="msg" placeholder='Send message' />
        </Col>
        <Col md={1}>
          <div className='btn chat__sendBtn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" className="bi bi-emoji-smile" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Chat
