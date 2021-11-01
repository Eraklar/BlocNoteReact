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

  const deleteNote = (note) => {
    setNotes(notes.filter((noteLol) => noteLol !== note));
  };

  const updateNote = (note) => {
    setNotes(notes.map((element) => (element.id === note.id ? note : element)));
    setCurrentText();
  };

  const handleChangeTitle = (event) => {
    setCurrentTitle(event.target.value);
  };

  const handleLoads = (note) => {
    setCurrentText(note.currentText);
    setCurrentTitle(note.currentTitle);
  };

  const save = (event) => {
    event.preventDefault();
    //verifier que l'id n'existe pas sinon on doit retrouver cette note et la changer
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
        handleLoads={handleLoads}
      />
    </div>
  );
}

export default App;
