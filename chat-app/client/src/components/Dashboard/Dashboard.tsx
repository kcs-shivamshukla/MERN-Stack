import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import ChatContainer from "../Chat/ChatContainer";
import Welcome from "../Chat/Welcome";
import { getusers, getAllChats, getGroups } from "../../api";
import { User } from "../../constants/interface";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const [groups, setGroups] = useState([]);
  const [activeChat, setactiveChat] = useState<User>();

  const navigate = useNavigate();

  const localStorageValue = localStorage.getItem("profile");
  if (typeof localStorageValue === "string") {
    var loggedUser = JSON.parse(localStorageValue).result;
  }

  const getAllUsers = async () => {
    try {
      const response = await getusers();
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllGroups = async () => {
    try {
      const response = await getGroups();
      console.log(response.data);
      setGroups(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Use Effect
  useEffect(() => {
    if (localStorageValue === null) {
      navigate("/");
    }
    getAllUsers();
    getAllGroups();
  }, [localStorageValue, navigate]);

  useEffect(() => {
    const allChats = async () => {
      const chatDetails = {
        sender: loggedUser._id,
        reciever: activeChat?._id,
      };
      const { data } = await getAllChats(chatDetails);
      console.log(data);
      setChats(data);
    };
    allChats();
  }, [activeChat?._id, loggedUser._id]);

  //Change chat on sidebar
  const handleActiveChatChange = (chat: User) => {
    setactiveChat(chat);
  };

  return (
    <Container fluid>
      <Row style={{ maxHeight: "100vh" }}>
        <Col md={3} className="py-4 px-2">
          <Sidebar
            users={users}
            groups={groups}
            activeChat={activeChat}
            handleActiveChatChange={handleActiveChatChange}
            loggedUser={loggedUser}
            chats={chats}
          />
        </Col>
        <Col md={9} className="px-4">
          {activeChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer
              activeChat={activeChat}
              loggedUser={loggedUser}
              chats={chats}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
