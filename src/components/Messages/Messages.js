import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import "./Messages.css";
function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
   
    fetch(process.env.REACT_APP_MESSAGE_ENDPOINT) // Environment variable test
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  return (
    <div className="messages-container">
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="messages-title">Message <strong className="purple">Board</strong></h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mx-auto">
           
            <MessageForm />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-3"> 
            
            <MessageList messages={messages} />
          </Col>
        </Row>
      </Container>
      <Particle />
    </div>
  );
}

export default Messages;
