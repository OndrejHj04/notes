import React from "react";

export default function Content() {
  return (
    <div className="content">
      <div className="write-container">
        <input className="write-title" placeholder="Title..."></input>
        <textarea
          className="write-content"
          placeholder="Note body..."
        ></textarea>
      </div>
    </div>
  );
}
