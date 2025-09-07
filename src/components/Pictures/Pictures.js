import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PictureCard from "./PictureCards";

function Pictures() {
  const [thumbnailUrls, setThumbnailUrls] = useState([]);

  useEffect(() => {
    
    const fetchThumbnailUrls = async () => {
      try {
        const thumbnailsContext = require.context(
          "../../thumbnails",
          false,
          /\.(png|jpe?g|svg)$/
        );
        const thumbnails = thumbnailsContext.keys()
          .map(key => ({
            key,
            number: parseInt(key.match(/(\d+)/)[0], 10)
          }))
          .sort((a, b) => a.number - b.number)
          .map(item => item.key)
          .map(thumbnailsContext);

        setThumbnailUrls(thumbnails);
      } catch (error) {
        console.error("Error fetching thumbnail URLs:", error);
      }
    };

    fetchThumbnailUrls();
  }, []);

  return (
    <Container fluid className="picture-section">
      <Particle />
      
      <Container>
        <h1 className="picture-heading">
          Some <strong className="purple">Pictures</strong> I've clicked recently
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {thumbnailUrls.map((thumbnailUrl, index) => (
            <Col key={index} md={4} className="picture-card">
              <PictureCard
                imgPath={thumbnailUrl}
                isBlog={false}
                title={`Picture ${index + 1}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Pictures;
