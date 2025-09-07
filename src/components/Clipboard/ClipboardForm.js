import React, { useState, useEffect } from "react";
import "./Clipboardform.css";

function ClipboardForm() {
  const [newClipboard, setNewClipboard] = useState("");
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
      const formattedDate = hours + ':' + minutes + ampm + ' | ' + day + '-' + month + '-' + year;
      return formattedDate;
    }


    const clipboardData = {
      filename: username || formatTimestamp(new Date()),
      content: newClipboard,
    };
  
    const apiEndpoint = process.env.REACT_APP_CLIPBOARD_ENDPOINT;
  
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clipboardData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Clipboard posted:", data);
        setNewClipboard("");
        setUsername("");
        setIsSubmitted(true);
  
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.error("Error posting clipboard:", error);
      });
  };
  

  return (
    <div>
      <h2 className="center-heading">Create a Clip</h2>
      {isSubmitted ? (
        <p className="success-clipboard">Clip creation successful!</p>
      ) : null}
      <form onSubmit={handleSubmit} className="clipboard-form">
        <div>
          <label htmlFor="username" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="filename"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            
          />
        </div>
        <div>
          <label htmlFor="newClipboard" className="form-label">
            Clip:
          </label>
          <input
            type="text"
            id="newClipboard"
            value={newClipboard}
            onChange={(e) => setNewClipboard(e.target.value)}
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

export default ClipboardForm;
