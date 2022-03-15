import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { nanoid } from "nanoid";

export default function App() {
  const [noteList, setNoteList] = React.useState([]);
  const [activeNote, setActiveNote] = React.useState()


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

  function removeNote(note) {
    let arr = [];
    setNoteList((oldVal) => {
      oldVal.map((item) => {
        if (item.id !== note.id) arr.push(item);
      });
      return arr;
    });
  }

  function selectNote(item,event) {
    console.log(item)

  }

  return (
    <div className="app">
      <Sidebar
        add={addNote}
        remove={removeNote}
        noteList={noteList}
        select={selectNote}
      />
      <Content noteList={noteList} />
    </div>
  );
}
