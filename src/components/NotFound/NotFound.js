import React from "react";
import { Link } from "react-router-dom"; 
import "./NotFound.css";
import notFoundImage from "../../Assets/404.gif";
import Particle from "../Particle";

function NotFound() {
  return (
    <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
      <img src={notFoundImage} alt="404 - Page Not Found" className="not-found-image" />
      <p>
      The path less travelled leads to an unknown destination. <br /> 
  Go 
  {" "}
  
  <Link to="/" className="home-link">
    home
  </Link>
  ?
</p>
      {}
      <Particle />
    </div>
  );
}

export default NotFound;
