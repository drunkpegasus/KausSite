import React, { useState, useEffect } from "react";
import "./MessageList.css";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { PiSortAscendingBold, PiSortDescendingBold } from "react-icons/pi";

function MessageList() {
  const [messages, setMessages] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    fetch(process.env.REACT_APP_MESSAGE_ENDPOINT) // Environment variable test
      .then((response) => response.json())
      .then((data) => {
        setMessages(sortOrder === "newest" ? data.reverse() : data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, [sortOrder]);

  return (
    <div>
      <h2>Posts</h2>
      <button
  className="buttonStyle"
  onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
>
  <div style={{ display: "flex", alignItems: "center" }}>
    {sortOrder === "newest" ? (
      <>
        <PiSortDescendingBold className="iconStyle" style={{ marginRight: "5px" }} />{" "}
        <span style={{ whiteSpace: "nowrap" }}>  Newest First</span>
      </>
    ) : (
      <>
        <PiSortAscendingBold className="iconStyle" style={{ marginRight: "5px" }} />{" "}
        <span style={{ whiteSpace: "nowrap" }}>  Oldest First</span>
      </>
    )}
  </div>
</button>





      {messages.map((message) => (
        <div key={message._id}>
          <div className="messageContainer">
            <div className="messageContent">
              <span className="username">
                <strong>{message.username}</strong>
              </span>
              <br />
              <div>
                <TfiAngleDoubleRight /> {message.message}
              </div>
            </div>
          </div>
          <div className="gap"></div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
