import React from "react";
import { Row, Col } from "react-bootstrap";
import { Chat, User } from "../../constants/interface";

interface ChatContentProps {
  chats: Chat[];
  loggedUser: User;
}

export default function ChatContent(props: ChatContentProps) {
  const { chats, loggedUser } = props;

  return (
    <Row className="chat__detailsContainer">
      <Col>
        <div
          style={{ height: "100%" }}
          className="d-flex flex-column justify-content-end"
        >
          {chats &&
            chats.map((chat, index) => {
              return (
                <div
                  className={`d-flex align-items-center justify-content-${
                    loggedUser._id === chat.sender ? "end" : "start"
                  }`}
                  key={index}
                >
                  <p className={"chat__content"}>{chat.chat}</p>
                </div>
              );
            })}
        </div>
      </Col>
    </Row>
  );
}
