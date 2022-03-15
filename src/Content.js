import React from "react";

export default function Content(props) {

  let defaultTitle
  let defaultContent

  if (props.activeNote) {
     defaultTitle = props.activeNote.firstChild.textContent;
     defaultContent =
      props.activeNote.getElementsByClassName("note-desc")[0].textContent;
  }

  const [title, setTitle] = React.useState();

  return (
    <div className="content">
      {!!props.activeNote && (
        <div className="write-container">
          <input className="write-title" placeholder={defaultTitle}></input>
          <textarea
            className="write-content"
            placeholder={defaultContent}
          ></textarea>
        </div>
      )}
    </div>
  );
}
