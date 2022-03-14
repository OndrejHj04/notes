import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { nanoid } from "nanoid";

export default function App() {
  const [noteList, setNoteList] = React.useState([]);

  function addNote() {
    setNoteList((oldVal) => {
      return [
        ...oldVal,
        { title: "Title...", content: "Note body...", id: nanoid() },
      ];
    });
  }

  function removeNote(note) {
    let arr = [];
    setNoteList((oldVal) => {
      oldVal.map((item) => {
        if (item.id !== note.id) arr.push(item);
      });
      return arr;
    });
  }

  return (
    <div className="app">
      <Sidebar add={addNote} remove={removeNote} noteList={noteList} />
      <Content />
    </div>
  );
}
