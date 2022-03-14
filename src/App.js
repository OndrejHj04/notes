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
        { title: "Title...", content: "Note body...", id: nanoid(), active: false},
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

  function selectNote(note){

    setNoteList(oldVal=>{
        oldVal.map(item=>{
            item.id === note.id ? note.active = true : item.active = false
        })
        return oldVal
    })

  }

  return (
    <div className="app">
      <Sidebar add={addNote} remove={removeNote} noteList={noteList} select={selectNote}/>
      <Content noteList={noteList} />
    </div>
  );
}
