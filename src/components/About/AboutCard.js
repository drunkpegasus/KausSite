import React from "react";
import Card from "react-bootstrap/Card";
import { FiChevronRight } from "react-icons/fi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There! I am <span className="purple">Kaustubh. </span>
            
             I'm an Application Developer at IBM. I have graduated in Computer Science from Nagpur University.
            
            <br />
            <br />
            Here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <FiChevronRight /> Reading
            </li>
            <li className="about-activity">
              <FiChevronRight /> Taking Pictures
            </li>
            <li className="about-activity">
              <FiChevronRight /> Writing
            </li>
          </ul>

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
