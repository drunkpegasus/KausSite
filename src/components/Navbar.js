import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineVideoCameraAdd,
  AiOutlinePicture,
  AiOutlineAppstore,
  AiOutlineSearch,
} from "react-icons/ai";
import {GiSnake} from "react-icons/gi";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/pictures"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlinePicture
                  style={{ marginBottom: "2px" }}
                />{" "}
                Pictures
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item> */}
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/messages"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineMessage
                  style={{ marginBottom: "2px" }}
                />{" "}
                Messages
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/moviereviews"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineVideoCameraAdd
                  style={{ marginBottom: "2px" }}
                />{" "}
                Movie Reviews
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/fishy"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineSearch
                  style={{ marginBottom: "2px" }}
                />{" "}
                Fishy
              </Nav.Link>
            </Nav.Item>

            


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/tictactoe"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineAppstore
                  style={{ marginBottom: "2px" }}
                />{" "}
                TicTacToe
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <Nav.Link
    as={Link}
    to="/snake"
    onClick={() => updateExpanded(false)}
    style={{ display: 'flex', alignItems: 'center', gap: '0', marginLeft: '0', lineHeight: '1' }}
  >
    <GiSnake style={{ marginBottom: '2px' }} /> nake
  </Nav.Link>
</Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;