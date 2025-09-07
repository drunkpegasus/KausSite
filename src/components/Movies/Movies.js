import React from "react";
import { Link } from "react-router-dom";
import movieReviews from "./MovieReviewsData";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import "./Movies.css";

function Movies() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="headingStyle">
            Movie <span className="purple">Reviews</span>
          </h1>
        </Col>
      </Row>
      <Row>
        {movieReviews.map((movie) => (
          <Col md={6} key={movie.id}>
            <Link
              to={`/moviereviews/${movie.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="linkStyle"
            >
              <Card style={{ transition: "0.3s" }} className="glow-on-hover movieBoxStyle">
                <Card.Body>
                  <Card.Title className="movieTitleStyle">{movie.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Particle />
    </Container>
  );
}

export default Movies;
