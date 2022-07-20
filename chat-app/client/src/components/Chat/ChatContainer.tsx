import React from "react";
import { Row, Image } from "react-bootstrap";
// import { io, Socket } from "socket.io-client";

import "./styles.scss";
import { Chat, User } from "../../constants/interface";
import ChatInput from "./ChatInput";
import ChatContent from "./ChatContent";
import { sendChat } from "../../api/index";

interface ChatProps {
  activeChat: User;
  loggedUser: User;
  chats: Chat[];
}

// interface ClientToServerEvents {
//   addUser: () => void
// }

// const socket = io(BASE_URL);

export default function ChatContainer(props: ChatProps) {
  const { activeChat, loggedUser, chats } = props;

  // const socket: Socket<ClientToServerEvents> = useRef();

  // useEffect(() => {
  //   if(loggedUser) {
  //     socket.current = io(BASE_URL);
  //     socket.current.emit("addUser", loggedUser._id);
  //   }
  // },[loggedUser])

  const handleChat = async (chatMsg: string) => {
    try {
      const chatContent = {
        sender: loggedUser._id,
        reciever: activeChat._id,
        chat: chatMsg,
      };
      const { data } = await sendChat(chatContent);
      alert(JSON.stringify(data.message));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat__container">
      <Row className="d-flex justify-content-between align-items-center py-2 chat__userDetailsContainer">
        <div className="d-flex align-items-center chat__userDetails">
          <Image
            src={process.env.PUBLIC_URL + "/images/Multiavatar-ETH.png"}
            className="chat__userImg"
          />
          <div className="d-flex flex-column ml-3">
            <h2 className="chat__userDetails--name">{activeChat.fullName}</h2>
            <div>
              <h6 className="chat__userDetails--status">Online</h6>
            </div>
          </div>
        </div>
        <div className="chat__userOptions d-flex align-items-center">
          <div className="mx-2 chat__userOptions--name">
            {loggedUser?.fullName?.charAt(0)}
          </div>
        </div>
      </Row>
      <ChatContent chats={chats} loggedUser={loggedUser} />

      <ChatInput handleChat={handleChat} />
    </div>
  );
}
