import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { User } from "../constants/interface";

interface SearchResultProps {
  searchResult: User[];
  handleActiveChat(data: object, index: number): void;
}

function SearchResult(props: SearchResultProps) {
  const { searchResult, handleActiveChat } = props;

  return (
    <>
      <div className="sideBar__searchResultList">
        {searchResult &&
          searchResult.map((user, index) => {
            return (
              <ListGroup>
                <ListGroup.Item key={index} className="mb-2">
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
    </>
  );
}

export default SearchResult;
