import React from "react";
import { useParams } from "react-router-dom";
import movieReviews from "./MovieReviewsData";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./MovieReviewDetail.css";
import Typewriter from "./Typewriter";




const MovieReviewDetail = () => {
  const { title } = useParams();
  const formattedTitle = title.replace(/-/g, ' ');

  const review = movieReviews.find((r) => r.title.toLowerCase() === formattedTitle.toLowerCase());

  
  



  if (!review) {
    return <div>Review not found.</div>;
  }

  return (
  <div className="movie-review-detail-background">
    <Container className="mt-5">
      
      <div style={{ marginTop: "80px", textAlign: "center" }}>
  <h2 style={{ color: "white" }}>
    <Typewriter text={review.title} color="#cd5ff8" />
  </h2>
</div>

      <p style={{ color: "white" }}>{review.review}</p>
      {review.imageUrl && <img src={review.imageUrl} alt={review.title} />}
    </Container>
    <Particle />
  </div>
);

  
  
  
};

export default MovieReviewDetail;
