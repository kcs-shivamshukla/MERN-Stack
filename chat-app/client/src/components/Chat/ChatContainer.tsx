/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Image } from "react-bootstrap";
// import { io, Socket } from "socket.io-client";
import { ThreeDotsVertical } from "react-bootstrap-icons";

import "./styles.scss";
import { Chat, User } from "../../constants/interface";
import ChatInput from "./ChatInput";
import ChatContent from "./ChatContent";
import { sendChat } from "../../api/index";
import { toast, ToastContainer } from "react-toastify";

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

  const [showUserOptions, setShowUserOptions] = useState(false);

  // const socket: Socket<ClientToServerEvents> = useRef();

  // useEffect(() => {
  //   if(loggedUser) {
  //     socket.current = io(BASE_URL);
  //     socket.current.emit("addUser", loggedUser._id);
  //   }
  // },[loggedUser])

  const handleShowUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  const handleChat = async (chatMsg: string, selectedFile: string) => {
    try {
      const chatContent = {
        sender: loggedUser._id,
        reciever: activeChat._id,
        chat: chatMsg,
        files: selectedFile,
      };
      if (chatContent.chat) {
        const { data } = await sendChat(chatContent);
        const reply = data.message;
        toast.success(reply);
      } else {
        toast.warning("Please fill the field.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat__container mt-3">
      <Row className="d-flex justify-content-between align-items-center py-2 chat__userDetailsContainer">
        <div className="d-flex align-items-center chat__userDetails">
          <Image
            src={`data:image/svg+xml;base64,${activeChat.profilePicture}`}
            className="chat__userImg"
          />
          <div className="d-flex flex-column ml-3">
            <h2 className="chat__userDetails--name">{activeChat.fullName}</h2>
            <div>
              <h6 className="chat__userDetails--status">Online</h6>
            </div>
          </div>
        </div>
        <div className="chat__userOptions">
          <div className="mx-2 btn chat__userOptions">
            <ThreeDotsVertical onClick={handleShowUserOptions} />
          </div>
        </div>

        {showUserOptions && (
          <div className="chat__userOptions--dropdown d-flex flex-column text-left">
            <a href="#" onClick={() => alert("Chat has been cleared.")}>
              Clear Chat
            </a>
            <a
              href="#"
              onClick={() =>
                // eslint-disable-next-line no-restricted-globals
                confirm("Are you sure you want to block the user?")
              }
            >
              Block User
            </a>
          </div>
        )}
      </Row>
      <ChatContent chats={chats} loggedUser={loggedUser} />

      <ChatInput handleChat={handleChat} />
      <ToastContainer />
    </div>
  );
}
