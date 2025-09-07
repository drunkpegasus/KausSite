import React, { useState, useEffect } from "react";

const Typewriter = ({ text, color, titleHeight }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!isDeleting && !isWaiting) {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsWaiting(true);
          setTimeout(() => {
            setIsDeleting(true);
          }, 5000); 
        }
      } else if (isDeleting) {
        if (currentIndex >= 0) {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsDeleting(false);
          setIsWaiting(true); 
          setTimeout(() => {
            setIsWaiting(false);
            setCurrentIndex(0);
          }, 2000); 
        }
      }
    }, 100); 

    return () => {
      
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, isDeleting, isWaiting]);

  return (
    <span style={{ color, display: "inline-block", height: titleHeight }}>
      {displayText}
    </span>
  );
};

export default Typewriter;
