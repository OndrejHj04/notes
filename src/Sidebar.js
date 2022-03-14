import React from "react";

export default function Sidebar(props) {

  console.log('noteList')

  const notes = props.noteList.map((item) => {
    return (
      <div className="one-note" key={item.id} onClick={()=>props.select(item)}>
        <h2 className="note-title">{item.title}</h2>
        <div className="note-desc">{item.content}</div>
        <div className="delete" onClick={() => props.remove(item)}>
          <img src="./trash.png" alt="trash" />
        </div>
        <div className="note-words">{item.id}</div>
      </div>
    );
  });

  return (
    <div className="sidebar">
      <h1 className="title">Notes</h1>
      <div className="control-panel">
        <div className="button" onClick={props.add}>
          <img src="./plus.png" alt="trash" />
        </div>
      </div>
      <div className="notes-container">{notes}</div>
    </div>
  );
}
