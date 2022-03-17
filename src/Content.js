import React from "react";

export default function Content(props) {

  const [noteChange, setNoteChange] = React.useState({
    title: '', content: ''
  })


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
          <input className="write-title" name="title" placeholder='Title...' onChange={change} value={noteChange.title} ></input>
          <textarea className="write-content" name="content" placeholder='Note body...' onChange={change} value={noteChange.content} ></textarea>
        </div>

    </div>
  );
}
