import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function ChatContent() {
    return(
        <Row className='chat__detailsContainer'>
        <Col>


          <div style={{ height: '100%' }} className='d-flex flex-column justify-content-end'>
            <p>Some1</p>
          </div>
        </Col>
      </Row>
    )
}