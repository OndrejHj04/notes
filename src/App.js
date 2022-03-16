import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { nanoid } from "nanoid";

export default function App() {
  const [noteList, setNoteList] = React.useState([]);
  const [activeNote, setActiveNote] = React.useState();

  function addNote() {
    setNoteList((oldVal) => {
      return [
        ...oldVal,
        {
          title: "Title...",
          content: "Note body...",
          id: nanoid(),
        },
      ];
    });
  }

  function removeNote(note, event) {
    if (activeNote && activeNote.lastChild.textContent === note.id) {
      setActiveNote(undefined);
    } 
      let arr = [];
      setNoteList((oldVal) => {
        oldVal.map((item) => {
          if (item.id !== note.id) arr.push(item);
        });
        return arr;
      });
    
  }

  function selectNote(note, event) {
    if (
      event.target.className !== "delete" &&
      event.target.className !== "trash"
    ) {
      if (activeNote && note.id === activeNote.lastChild.textContent) {
        setActiveNote(undefined);
      } else {
        let list = document.querySelectorAll(".one-note");
        let current = [...list].map((item) => {
          if (item.lastChild.textContent === note.id) setActiveNote(item);
        });
      }
    }
  }

  return (
    <div className="app">
      <Sidebar
        add={addNote}
        remove={removeNote}
        noteList={noteList}
        select={selectNote}
      />
      {activeNote && <Content noteList={noteList} activeNote={activeNote} />}
    </div>
  );
}
