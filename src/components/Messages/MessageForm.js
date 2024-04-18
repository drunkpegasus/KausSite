import React, { useState, useEffect } from "react";
import "./MessageForm.css";

function MessageForm() {
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();

    function formatTimestamp(date) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      let hours = date.getHours();
      const minutes = ('0' + date.getMinutes()).slice(-2);
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      const formattedDate = hours + ':' + minutes + ampm + ' | ' + day + '-' + month + '-' + year;  //day + '-' + month + '-' + year + ' | ' + hours + ':' + minutes + ampm;
      return formattedDate;
    }

    const messageData = {
      username: username || formatTimestamp(new Date()),
      message: newMessage,
    };

    const apiEndpoint = process.env.REACT_APP_MESSAGE_ENDPOINT;

    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Message posted:", data);
        setNewMessage("");
        setUsername("");
        setIsSubmitted(true);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.error("Error posting message:", error);
      });
  };

  return (
    <div>
      <h2 className="center-heading">Create a Post</h2>
      {isSubmitted ? (
        <p className="success-message">Post creation successful!</p>
      ) : null}
      <form onSubmit={handleSubmit} className="message-form">
        <div>
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            //required
          />
        </div>
        <div>
          <label htmlFor="newMessage" className="form-label">
            Message:
          </label>
          <input
            type="text"
            id="newMessage"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button buttonGlow">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
