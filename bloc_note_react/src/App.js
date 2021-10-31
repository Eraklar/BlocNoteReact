import { useState } from "react";
import { MarkDownInput } from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";
import React from "react";
import { nanoid } from "nanoid";

import { NavNoteBar } from "./components/NavNoteBar";

function App() {
  const [notes, setNotes] = useState([]);

  const [currentText, setCurrentText] = useState("");
  const [id, setId] = useState(nanoid);
  const [currentTitle, setCurrentTitle] = useState("");

  const handleChangeText = (event) => {
    setCurrentText(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setCurrentTitle(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    if (!currentText) return;
    const note = {
      id,
      currentTitle,
      currentText,
    };
    console.log(note);
    setNotes([...notes, note]);
    console.log(notes);
    setCurrentText("");
    setCurrentTitle("");
  };

  //<NavNoteBar notes={notes} />

  return (
    <div>
      <NoteDisplay textToDisplay={currentText} title={currentTitle} />
      <MarkDownInput
        notes={notes}
        handleChangeText={handleChangeText}
        handleChangeTitle={handleChangeTitle}
        save={save}
      />
    </div>
  );
}

export default App;
