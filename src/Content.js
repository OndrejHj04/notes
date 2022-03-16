import React from "react";

export default function Content(props) {



  const [noteChange, setNoteChange] = React.useState({
    title: "", content: ""
  })

  console.log(noteChange)

  React.useEffect(()=>{
    setNoteChange(()=>{
      return{
        title: props.activeNote.getElementsByClassName("note-title")[0].textContent,
        content: props.activeNote.getElementsByClassName("note-desc")[0].textContent
      } 
    })
  },[props.activeNote])


  props.activeNote.getElementsByClassName("note-title")[0].textContent = noteChange.title ? noteChange.title : "Title..."
  props.activeNote.getElementsByClassName("note-desc")[0].textContent = noteChange.content ? noteChange.content : "Note body..."
  


  function change(event){
    setNoteChange(oldVal=>{
      return {
        ...oldVal,
        [event.target.name]: event.target.value
      }
    })
  }



  return (
    <div className="content">

        <div className="write-container">
          <input className="write-title" name="title" placeholder='Title...' onChange={change} value={noteChange.title}></input>
          <textarea className="write-content" name="content" placeholder='Note body...' onChange={change} value={noteChange.content}></textarea>
        </div>

    </div>
  );
}
