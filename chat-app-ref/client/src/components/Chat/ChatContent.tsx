import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import {
  Row,
  Col,
  Image,
  Modal,
  Button,
  Form,
  Container,
} from "react-bootstrap";

import { Chat, User } from "../../constants/interface";
import Spinner from "../Spinner/Spinner";

interface ChatContentProps {
  chats: Chat[];
  loggedUser: User;
  isLoading: boolean;
}

export default function ChatContent(props: ChatContentProps) {
  const { chats, loggedUser, isLoading } = props;
  const chatRef = useRef<null | HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>();

  const scrollToBottom = () => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageModal = () => {
    setShow(!show);
  };

  const imageChange = (img: string | undefined) => {
    setSelectedImage(img);
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Row
      className={`chat__detailsContainer pt-2 ${
        isLoading ? "justify-content-center align-items-center" : ""
      }`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Col>
          <div
            style={{ height: "auto" }}
            className="d-flex flex-column justify-content-end scrollbar"
          >
            {chats &&
              chats.map((chat, index) => {
                return (
                  <div>
                    <div
                      className={`d-flex scrollbar align-items-center justify-content-${
                        loggedUser._id === chat.sender ? "end" : "start"
                      }`}
                      key={index}
                    >
                      {chat.chat && (
                        <div>
                          <p
                            className={`chat__content chat__content--${
                              loggedUser._id === chat.sender
                                ? "sender"
                                : "reciever"
                            }`}
                          >
                            {chat.chat}
                          </p>
                          <span
                            style={{ fontSize: ".8rem", color: "#c3c6cf" }}
                            className="ml-2"
                          >
                            {moment(chat.createdAt).format("hh:mm A")}
                          </span>
                        </div>
                      )}

                      {chat.files && (
                        <>
                          <div className="chat__contentImgContainer d-flex flex-column align-items-start">
                            <Image
                              className="chat__content--img mb-2"
                              src={`${chat.files}`}
                              onClick={() => {
                                handleImageModal();
                                imageChange(chat.files);
                              }}
                            />
                            <span
                              style={{ fontSize: ".8rem", color: "#c3c6cf" }}
                              className="ml-2"
                            >
                              {moment(chat.createdAt).format("hh:mm A")}
                            </span>
                          </div>

                          <Modal show={show} onHide={handleImageModal}>
                            <Modal.Body>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Container fluid>
                                  <Row>
                                    <Col
                                      md={12}
                                      className="d-flex justify-content-center align-items-center"
                                    >
                                      <Image
                                        className="chat__content--modalImg"
                                        src={selectedImage}
                                      />
                                    </Col>
                                  </Row>
                                </Container>
                              </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={handleImageModal}
                              >
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </>
                      )}
                    </div>
                    {/* <div ref={chatRef} /> */}
                  </div>
                );
              })}
          </div>
        </Col>
      )}
    </Row>
  );
}
