
import { useState } from "react";
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";
import React from "react";

function App() {
  const [text, setText] = useState("");
    
  const handleChange = (event) => {
        setText(event.target.value);
        console.log(text);
  } 
  return (
    <div>
      <NoteDisplay textToDisplay={text}/>
      <MarkdownInput text={text} handleChange={handleChange}/>
    </div>
  );
}

export default App;
