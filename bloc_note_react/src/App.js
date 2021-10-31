import { useState } from "react";
import { MarkDownInput } from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";
import React from "react";
import { nanoid } from "nanoid";

import { NavNoteBar } from "./components/NavNoteBar";

function App() {
  const [notes, setNotes] = useState([]);

  const [currentText, setCurrentText] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const handleChangeText = (event) => {
    setCurrentText(event.target.value);
  };

  const deleteNote = (note) => {};

  const updateNote = () => {};

  const handleChangeTitle = (event) => {
    setCurrentTitle(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    if (!currentText) return;
    const id = nanoid();
    const note = {
      id,
      currentTitle,
      currentText,
    };
    setNotes((notes) => [...notes, note]);
    setCurrentText("");
    setCurrentTitle("");
  };

  console.log(notes);

  return (
    <div>
      <NoteDisplay textToDisplay={currentText} title={currentTitle} />
      <MarkDownInput
        currentText={currentText}
        currentTitle={currentTitle}
        handleChangeText={handleChangeText}
        handleChangeTitle={handleChangeTitle}
        save={save}
      />
      <NavNoteBar
        notes={notes}
        deleteNote={deleteNote}
        updateNote={updateNote}
      />
    </div>
  );
}

export default App;
