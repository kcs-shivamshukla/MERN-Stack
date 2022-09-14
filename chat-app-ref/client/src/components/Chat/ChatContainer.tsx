/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Image } from "react-bootstrap";
// import { io, Socket } from "socket.io-client";
import { ThreeDotsVertical } from "react-bootstrap-icons";

import "./styles.scss";
import { activeChat, Chat, User } from "../../constants/interface";
import ChatInput from "./ChatInput";
import ChatContent from "./ChatContent";
import { deleteGroup, sendChat } from "../../api/index";
import { toast, ToastContainer } from "react-toastify";

interface ChatProps {
  activeChat: activeChat;
  loggedUser: User;
  chats: Chat[];
  isLoading: boolean;
}

// interface ClientToServerEvents {
//   addUser: () => void
// }

// const socket = io(BASE_URL);

export default function ChatContainer(props: ChatProps) {
  const { activeChat, loggedUser, chats, isLoading } = props;

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
      if (chatContent.chat || chatContent.files) {
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

  const removeGroup = async (activeChat: activeChat) => {
    try {
      const groupId = activeChat._id;
      if (typeof groupId === "string") {
        console.log("first");
        const { data } = await deleteGroup(groupId);
        console.log(data.message);
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat__container mt-3">
      {activeChat.isGroupChat ? (
        <Row className="d-flex justify-content-between align-items-center py-2 chat__userDetailsContainer">
          <div className="d-flex align-items-center chat__userDetails">
            <p className="chat__userDetails--profile">
              {activeChat?.groupName?.charAt(0)}
            </p>
            <div className="d-flex flex-column ml-3">
              <h2 className="chat__userDetails--name">
                {activeChat.groupName}
              </h2>
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
              {loggedUser._id === activeChat.groupAdmin ? (
                <>
                  <a>Edit Group Name</a>
                  <a onClick={() => removeGroup(activeChat)}>Delete Group</a>
                </>
              ) : (
                ""
              )}
            </div>
          )}
        </Row>
      ) : (
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
      )}
      <ChatContent
        chats={chats}
        loggedUser={loggedUser}
        isLoading={isLoading}
      />

      <ChatInput handleChat={handleChat} />
      <ToastContainer />
    </div>
  );
}
