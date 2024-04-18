import React, { useState, useEffect, useCallback } from "react";
import "./ClipboardList.css";
import { PiSortAscendingBold, PiSortDescendingBold } from "react-icons/pi";
import { TfiAngleDoubleRight } from "react-icons/tfi";

function ClipboardList() {
  const [clipboards, setClipboards] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");

  const fetchClips = useCallback(() => {
    fetch(process.env.REACT_APP_CLIPBOARD_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const sortedData = sortOrder === "newest" ? data.reverse() : data;
        setClipboards(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching clipboard:", error);
      });
  }, [sortOrder]);

  useEffect(() => {
    fetchClips();
  }, [sortOrder, fetchClips]);

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        console.log("Copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <div>
      <h2>Clips</h2>
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

      {clipboards.map((clipboard) => (
        <div
          key={clipboard._id}
          className="clipboardContainer"
          onClick={() => handleCopy(clipboard.content)}
        >
          <div className="clipboardContent">
            <span className="filename">
              <strong>{clipboard.filename}</strong>
            </span>
            <br />
            <div>
              <TfiAngleDoubleRight /> {clipboard.content}
            </div>
          </div>
          <div className="gap"></div>
        </div>
      ))}
    </div>
  );
}

export default ClipboardList;
