import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="title">Notes</h1>
      <div className="control-panel">
            <div className="button"><img src="./plus.png" alt="trash"/></div>
            <div className="button"><img src="./trash.png" alt="trash"/></div>
        </div>
      <div className="notes-container">
        {/* <div className="one-note">
            <h2 className="note-title">Tady neco pisu</h2>
            <div className="note-desc">A tady je taky neco</div>
            <div className="note-words">Pocet slov</div>
        </div> */}
      </div>
    </div>
  );
}
