import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ClipboardForm from "./ClipboardForm";
import ClipboardList from "./ClipboardList";
import "./Clipboard.css";

function Clipboards() {
  const [clipboards, setClipboards] = useState([]); //idk

  useEffect(() => {
    fetchClips();
  }, []);

  const fetchClips = () => {
    fetch(process.env.REACT_APP_CLIPBOARD_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setClipboards(data);
      })
      .catch((error) => {
        console.error("Error fetching clipboards:", error);
      });
  };

  return (
    <div className="clipboards-container">
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="clipboards-title">Clip<strong className="purple">Board</strong></h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mx-auto">
            <ClipboardForm />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-3">
            <ClipboardList clipboards={clipboards} />
          </Col>
        </Row>
      </Container>
      <Particle />
    </div>
  );
}

export default Clipboards;
