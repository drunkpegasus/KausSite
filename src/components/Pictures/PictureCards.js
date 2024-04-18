import React from "react";
import Card from "react-bootstrap/Card";

function PictureCards(props) {
  
  const filename = props.imgPath.split("/").pop().split(".")[0];

  const openOriginalImageInNewTab = () => {
    
    const originalImagePath = `${process.env.PUBLIC_URL}/pictures/${filename}.jpg`; 

    window.open(originalImagePath, "_blank");
  };

  return (
    <Card
      className="picture-card-view"
      onClick={openOriginalImageInNewTab}
      style={{ cursor: "pointer" }}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: "auto" }} />
      
    </Card>
  );
}

export default PictureCards;
