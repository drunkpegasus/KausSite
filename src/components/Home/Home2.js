import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,

} from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Allow me to<span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              
               Hello world,

I'm Kaustubh! I've been immersed in the realm of CS since forever, and it's been quite the adventure!
<br /> 
When I'm not in tech mode, you'll often find me delving and rummaging through a diverse range of reading, 
from literary classics to the most eclectic of subjects
<br />
              <br />I'm well-versed in languages like
              <i>
                <b className="purple"> C++, Java, </b> 
              </i>
              and I've explored 
              <i>
                <b className="purple"> React </b> 
              </i>
              a bit.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            
            <p>
               <span className="purple">Connect </span>with me?
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/drunkpegasus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kaustubh_.sh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:me@kaustubh.live"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>

              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaustubhshastrakar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillLinkedin />

                </a>
              </li>


            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
