/* eslint-disable */
import { useState } from "react";
import { useEffect } from "react";
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";
import React from "react";

import NavNoteBar from "./components/NavNoteBar";

function App() {
  const [text, setText] = useState('');
    
  const handleChange = (event) => {
        setText(event.target.value);
  } 


  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(text));
  }, [text]);

  

  return (
    <div>
      <NavNoteBar />
      <NoteDisplay textToDisplay={text}/>
      <MarkdownInput text={text} handleChange={handleChange}/>
    </div>
  );
}

export default App;
