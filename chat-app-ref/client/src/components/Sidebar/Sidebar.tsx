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
  ListGroup,
} from "react-bootstrap";

import "./styles.scss";
import { searchUsers, createGroupChat } from "../../api";
import { User, Chat, Group } from "../../constants/interface";
import { Search } from "react-bootstrap-icons";
import { toast } from "react-toastify";

interface SidebarProps {
  users: User[];
  groups: Group[];
  handleActiveChatChange(data: object): void;
  loggedUser: User;
  activeChat: User | undefined;
  chats: Chat[];
}

function Sidebar(props: SidebarProps) {
  const { users, groups, activeChat, handleActiveChatChange, loggedUser } =
    props;
  const navigate = useNavigate();

  const [show, setShow] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchResult, setSearchResult] = useState<User[]>([]);
  const [searchShow, setSearchShow] = useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setSelectedUsers([]);
    setShow(false);
  };

  const addGroupName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleActiveChat = (user: object, index: number) => {
    handleActiveChatChange(user);
    setSearchShow(false);
    setSearchKeyword("");
    setSearchResult([]);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const createGroup = async () => {
    if (groupName !== "") {
      console.log(groupName);
      if (selectedUsers.length > 2) {
        console.log(selectedUsers);
        const groupChatDetails = {
          groupName: groupName,
          sender: loggedUser?._id,
          reciever: selectedUsers,
        };
        const { data } = await createGroupChat(groupChatDetails);
        console.log(data.message);
        handleClose();
      } else {
        toast.warning("Select more than 2 users.");
      }
    } else {
      toast.error("Please Enter Group Name.");
    }
  };

  const selectGroupUser = (user: any) => {
    if (selectedUsers.indexOf(user) === -1) {
      setSelectedUsers([
        ...selectedUsers,
        {
          fullName: user?.fullName,
          _id: user?._id,
          profilePicture: user?.profilePicture,
        },
      ]);
    }
  };

  const searchUser = async (searchKeyword: string | number) => {
    try {
      const searchUserDetails = {
        sender: loggedUser._id,
        keyword: searchKeyword,
      };
      const { data } = await searchUsers(searchUserDetails);
      console.log(data);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeUserFromSelectedUsers = (index: number) => {
    const newArray = [];
    newArray.push(...selectedUsers);
    newArray.splice(index, 1);
    setSelectedUsers(newArray);
  };

  const usersList = users.filter((user) => user._id !== loggedUser._id);

  return (
    <>
      <div className="sideBar__container sideBar__container--bg">
        <Row className="d-flex justify-content-between align-items-center sideBar__header pb-2 ml-1">
          <Image
            src={`data:image/svg+xml;base64,${loggedUser.profilePicture}`}
            className="sideBar__profilePicture"
            rounded
          />
          <div className="sideBar__options mr-3">
            <DropdownButton
              title="Options"
              variant="outline-secondary"
              align="end"
            >
              <Dropdown.Item onClick={handleOpen}>New Group</Dropdown.Item>
              <Dropdown.Item onClick={() => setSearchShow(true)}>
                Search
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </DropdownButton>

            {/* ----------------------New Group Modal-------------------------------- */}

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
                    <Form.Control type="text" onChange={addGroupName} />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Add Users</Form.Label>
                    <DropdownButton
                      title="Select Users"
                      size="lg"
                      className="sideBar__selectUsers"
                    >
                      {usersList &&
                        usersList.map((user, index) => {
                          return (
                            <Dropdown.Item key={index}>
                              <Row
                                className="sideBar__searchResult align-items-center"
                                onClick={() => selectGroupUser(user)}
                              >
                                <Col md={3}>
                                  <Image
                                    src={`data:image/svg+xml;base64,${user.profilePicture}`}
                                    className="sideBar__profilePicture"
                                  />
                                </Col>
                                <Col md={9}>
                                  <h6>{user.fullName}</h6>
                                </Col>
                              </Row>
                            </Dropdown.Item>
                          );
                        })}
                    </DropdownButton>
                  </Form.Group>

                  <div className="sideBar__selectedUsers d-flex align-items-center flex-wrap">
                    {selectedUsers &&
                      selectedUsers.map((user, index) => {
                        return (
                          <div
                            className="sideBar__selectedUsers--container mr-2 mt-1 d-flex align-items-center"
                            key={index + 10}
                          >
                            <p className="sideBar__selectedUsers--content">
                              {user.fullName?.split(" ")[0]}
                            </p>
                            <p
                              className="pr-1"
                              onClick={() => removeUserFromSelectedUsers(index)}
                            >
                              X
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={createGroup}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          {/* --------------------------------Search Bar------------------------------------- */}

          {searchShow && (
            <div className="sideBar__searchBar">
              <InputGroup className="py-4 px-2">
                <Form.Control
                  type="text"
                  placeholder="Search Users"
                  value={searchKeyword}
                  onChange={(e: any) => setSearchKeyword(e.target.value)}
                  className="sideBar__searchBar--Input"
                />
                <Button
                  type="submit"
                  onClick={() => searchUser(searchKeyword)}
                  style={{ cursor: "pointer" }}
                >
                  <Search />
                </Button>
              </InputGroup>

              <div className="sideBar__searchResultList">
                {searchResult &&
                  searchResult.map((user, index) => {
                    return (
                      <ListGroup>
                        <ListGroup.Item key={index + 20} className="mb-2">
                          <Row
                            className="sideBar__searchResult align-items-center"
                            onClick={() => handleActiveChat(user, index)}
                          >
                            <Col md={3}>
                              <Image
                                src={`data:image/svg+xml;base64,${user.profilePicture}`}
                                className="sideBar__profilePicture"
                              />
                            </Col>
                            <Col md={9}>
                              <h4>{user.fullName}</h4>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    );
                  })}
              </div>
            </div>
          )}
        </Row>

        <div
          className="my-3 pl-2"
          style={{ borderBottom: "1px solid #c3c6cf" }}
        >
          <h5>Chats</h5>
        </div>
        <div className="sideBar__Lists">
          <div className="sideBar__usersList px-1">
            {usersList &&
              usersList.map((user, index) => {
                return (
                  <>
                    <Row
                      style={{
                        cursor: "pointer",
                      }}
                      className={`py-3 px-2 ml-1 mr-2 mb-2 align-items-center position-relative sideBar__usersList--users sideBar__usersList--${
                        user._id === activeChat?._id ? "selected" : ""
                      }`}
                      key={index + 30}
                      onClick={() => handleActiveChat(user, index)}
                    >
                      <Col md={2} className="pl-2">
                        <Image
                          src={`data:image/svg+xml;base64,${user.profilePicture}`}
                          className="sideBar__img"
                          rounded
                        />
                      </Col>
                      <Col md={9}>
                        <h5 className="sideBar__text--primary">
                          {user.fullName}
                        </h5>
                      </Col>
                    </Row>
                  </>
                );
              })}
          </div>
          <div className="sideBar__groupsList">
            {groups &&
              groups.map((group, index) => {
                return (
                  <>
                    <Row
                      style={{
                        cursor: "pointer",
                      }}
                      className={`py-3 px-2 ml-1 mr-2 mb-2 align-items-center position-relative sideBar__usersList--users sideBar__usersList--${
                        group._id === activeChat?._id ? "selected" : ""
                      }`}
                      key={group._id}
                      onClick={() => handleActiveChat(group, index)}
                    >
                      <Col md={2} className="pl-2">
                        <p className="sideBar__groupsList--title">
                          {group?.groupName?.charAt(0)}
                        </p>
                      </Col>
                      <Col md={9}>
                        <h5 className="sideBar__text--primary">
                          {group.groupName}
                        </h5>
                      </Col>
                    </Row>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
