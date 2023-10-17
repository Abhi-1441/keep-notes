import React, { useState } from "react";

function CreateArea(props) {
  var [title, setTitle] = useState("");
  var [content, setContent] = useState("");

  function inputText(event) {
    if (event.target.name === "title") {
      const newTitle = event.target.value;
      setTitle(newTitle);
    } 
    if (event.target.name === "content") {
      const newContent = event.target.value;
      setContent(newContent);
    }
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={inputText}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={content}
          onChange={inputText}
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onAdd(title, content);
            setTitle ("");
            setContent ("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
