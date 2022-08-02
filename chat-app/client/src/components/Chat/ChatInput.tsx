import React, { useState } from "react";
import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import { EmojiSmile, Paperclip, Send } from "react-bootstrap-icons";
import Picker from "emoji-picker-react";
import { toast } from "react-toastify";

interface ChatInputProps {
  handleChat(data: string, file: string): void;
}

export default function ChatInput(props: ChatInputProps) {
  const { handleChat } = props;

  const [show, setShow] = useState(false);
  const [chatContent, setChatContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleInputModal = () => {
    setShow(!show);
  };

  const handleEmoji = (
    event: React.MouseEvent<Element, MouseEvent>,
    emojiObject: any
  ) => {
    let content = chatContent;
    content += emojiObject.emoji;
    console.log(content);
    setChatContent(content);
  };

  const setConvertedFile = (convertedFile: any) => {
    console.log(convertedFile);
    setSelectedFile(convertedFile);
  };

  const toBase64 = (file: File) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader);
      var convertedFile = reader.result;
      setConvertedFile(convertedFile);
    };
    reader.onerror = function () {
      console.log(reader.error);
    };
    return setConvertedFile;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    console.log(fileList);
    toast.success("File Selected");

    if (fileList) {
      toBase64(fileList[0]);
    }

    console.log(selectedFile);
  };

  const sendChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChat(chatContent, selectedFile);
    setChatContent("");
    setSelectedFile("");
  };

  return (
    <form onSubmit={(e) => sendChat(e)}>
      <Row className="chat__inputContainer align-items-center">
        <Col md={12} className="d-flex align-items-center p-0">
          <div className="d-flex align-items-center position-relative col-md-11 p-0 pl-3">
            <EmojiSmile
              onClick={toggleEmojiPicker}
              className="chat__emojiIcon"
            />

            {showEmojiPicker && (
              <Picker
                onEmojiClick={(event, emojiObject) =>
                  handleEmoji(event, emojiObject)
                }
              />
            )}

            <input
              className="chat__input"
              type="text"
              name="msg"
              id="msg"
              placeholder="Send message"
              value={chatContent}
              onChange={(e) => setChatContent(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center justify-content-end col-md-1 p-0">
            <Modal show={show} onHide={handleInputModal}>
              <Modal.Header>
                <Modal.Title>Choose an Image</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      className="p-0 h-auto"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleFileChange(e)
                      }
                    />
                  </Form.Group>
                </>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleInputModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleInputModal}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <label
              htmlFor="fileUpload"
              className="mb-0 mx-3"
              onClick={handleInputModal}
            >
              <Paperclip className="chat__fileUpload" />
            </label>
            <button className="btn chat__sendBtn">
              <Send />
            </button>
          </div>
        </Col>
      </Row>
    </form>
  );
}
