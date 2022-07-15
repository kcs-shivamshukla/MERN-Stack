import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Dropdown,
  DropdownButton,
  Modal,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";

import "./styles.scss";
import { User } from "../../constants/interface";

interface SidebarProps {
  users: User[];
  activeChat(data: object): void;
  loggedUser: User;
}

function Sidebar(props: SidebarProps) {
  const { users, activeChat, loggedUser } = props;
  const navigate = useNavigate();

  const [show, setShow] = useState<boolean>(false);
  const [searchShow, setSearchShow] = useState<boolean>(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleActiveChat = (user: object) => {
    activeChat(user);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const usersList = users.filter((user) => user._id !== loggedUser._id);

  return (
    <>
      <div className="sideBar__container sideBar__container--bg">
        <Row className="d-flex justify-content-between align-items-center sideBar__header">
          <h2>{loggedUser.fullName}</h2>
          <div className="sideBar__options">
            <DropdownButton title="Options" variant="outline-secondary">
              <Dropdown.Item onClick={handleOpen}>New Group</Dropdown.Item>
              <Dropdown.Item onClick={() => setSearchShow(true)}>
                Search
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </DropdownButton>

            {/* New Group Modal */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Create New Group</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control type="text" placeholder="demo group" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Add Users</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          {searchShow && (
            <div className="sideBar__searchBar">
              <InputGroup className="py-2 px-2">
                <Form.Control
                  type="text"
                  placeholder="Search for Users"
                  className="sideBar__searchBar--Input"
                />
                <InputGroup.Text
                  onClick={() => setSearchShow(false)}
                  style={{ cursor: "pointer" }}
                >
                  x
                </InputGroup.Text>
              </InputGroup>
            </div>
          )}
        </Row>

        <div className="sideBar__usersList pb-5">
          {usersList &&
            usersList.map((user, index) => {
              return (
                <Row
                  style={{ cursor: "pointer" }}
                  className="mt-4 position-relative"
                  key={index}
                  onClick={() => handleActiveChat(user)}
                >
                  <Col md={2} className="pl-3">
                    <Image
                      src={
                        process.env.PUBLIC_URL + "/images/Multiavatar-ETH.png"
                      }
                      className="sideBar__img"
                      rounded
                    />
                  </Col>
                  <Col md={8}>
                    <h5 className="sideBar__text--primary">{user.fullName}</h5>
                    <h6 className="sideBar__text--secondary">Something</h6>
                  </Col>
                  <Col md={2}>
                    <h6 className="sideBar__text--secondary text-center">4</h6>
                    <h6 className="sideBar__text--secondary text-center">
                      10:35
                    </h6>
                  </Col>
                </Row>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
