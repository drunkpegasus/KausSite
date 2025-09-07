import React, { useState } from "react";
import "./Component1.scss";
import Loading from "./Loader";
import axios from "axios";
import Particle from "../Particle"; 

const FishyComponent = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [result, setResult] = useState(0);
  const [isFetchingData, setFetchingData] = useState(false);
  const [resultStyle, setResultStyle] = useState("result-text");
  const [placeholder, setPlaceholder] = useState("https://www.google.com");

  function getPrediction(url) {
    setFetchingData(true);

    if (url.length <= 5) {
      console.log("URL provided is less than 5 characters");
      setResult(0);
      setFetchingData(false);
      setResultStyle("result-text");
      return;
    }

    const apiUrl = process.env.REACT_APP_FISHY_URL;
    var data = { url: url };

    console.log("Sending post request");

    axios
      .post(apiUrl, data)
      .then((response) => {
        const data = response.data;
        console.log("Request Successful");
        console.log(data);
        const proba = data["prediction"];
        setResult(proba);

        if (proba > 70) {
          console.log("Probability > 70, glow red");
          setResultStyle("result-text-malicious");
        } else {
          // Reset to blue if probability is not above 70
          setResultStyle("result-text");
        }
      
        setFetchingData(false);
      })
      .catch((error) => {
        console.log("Request is NOT Successful !");
        console.log(error);
        setFetchingData(false);
        setResultStyle("result-text");
      });
  }

  function handleInputFocus() {
    setPlaceholder("");
  }

  function handleInputBlur() {
    if (inputUrl === "") {
      setPlaceholder("https://www.google.com");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    getPrediction(inputUrl);
  }

  return (
    <div className="component1" align="center">
      <h1 style={{ color: "white", marginBottom: "80px" }}>Phishing URL <strong className="purple">Detection</strong> </h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus={true}
          className="url-input"
          placeholder={placeholder}
          value={inputUrl}
          onChange={(event) => setInputUrl(event.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <br />
        <button type="submit" className="detect-button">
          Scan URL
        </button>
      </form>
      <div className="loader-container">
        {isFetchingData ? (
          <Loading
            className="loader"
            type={"bars"}
            color={"#fff"}
            width={"80px"}
            height={"80px"}
          />
        ) : (
          <p className="display">
            There is <span className={resultStyle}> {result}% </span>
            chance the URL provided is malicious.
          </p>
        )}
      </div>
      <div className="particle-container">
        <Particle />
      </div>
    </div>
  );
};

export default FishyComponent;
