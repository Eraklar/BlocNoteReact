import { useState } from "react";
import { MarkDownInput } from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";
import React from "react";
import { nanoid } from "nanoid";

import { NavNoteBar } from "./components/NavNoteBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [currentText, setCurrentText] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const handleChangeText = (event) => {
    setCurrentText(event.target.value);
  };

  const deleteNote = (note) => {
    setNotes(notes.filter((noteLol) => noteLol !== note));
    setCurrentNote(null);
    setCurrentText("");
    setCurrentTitle("");
  };

  const handleChangeTitle = (event) => {
    setCurrentTitle(event.target.value);
  };

  const handleLoads = (note) => {
    setCurrentText(note.currentText);
    setCurrentTitle(note.currentTitle);
    setCurrentNote(note);
  };

  const updateCurrentNote = () => {
    const id = currentNote.id;
    const note = {
      id,
      currentTitle,
      currentText,
    };
    setCurrentNote(note);
  };

  const handleSave = (event) => {
    event.preventDefault();
    handleChangeTitle(event);
    handleChangeText(event);
    if (!currentTitle || !currentText) return;
    if (currentNote) {
      updateCurrentNote();
      editNote();
    } else {
      createNote();
    }

    setCurrentNote(null);
    setCurrentText("");
    setCurrentTitle("");
  };

  const editNote = () => {
    setNotes(
      notes.map((element) =>
        element.id === currentNote.id ? currentNote : element
      )
    );
  };

  const createNote = () => {
    const id = nanoid();
    const newNote = {
      id,
      currentTitle,
      currentText,
    };
    setNotes((notes) => [...notes, newNote]);
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
        handleSave={handleSave}
      />
      <NavNoteBar
        notes={notes}
        deleteNote={deleteNote}
        handleLoads={handleLoads}
      />
    </div>
  );
}

export default App;
