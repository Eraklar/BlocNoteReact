import { useState } from "react";
import { MarkDownInput } from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";
import React from "react";
import { nanoid } from "nanoid";

import { NavNoteBar } from "./components/NavNoteBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({});
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
    setCurrentNote(note);
  };

  const save = (event) => {
    event.preventDefault();
    let isNew;
    if (!currentText) return;
    console.log(currentNote);
    if (currentNote !== {}) {
      const isNew = notes.find((element) => element.id === currentNote.id); // retourne une note
      console.log(isNew);
    }

    console.log(isNew);
    if (isNew !== undefined) {
      setNotes(notes.map((element) => element.id === isNew.id));
    } else {
      const id = nanoid();
      const newNote = {
        id,
        currentTitle,
        currentText,
      };
      setNotes((notes) => [...notes, newNote]);
    }

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
