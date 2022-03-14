import React from "react";

export default function Content(props) {



  return (
    <div className="content">
      {!!props.noteList.length && <div className="write-container">
        <input className="write-title" placeholder="Title..."></input>
        <textarea
          className="write-content"
          placeholder="Note body..."
        ></textarea>
      </div>}
    </div>
  );
}
