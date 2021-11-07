import { useEffect, useState } from "react";
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
  };

  const handleChangeTitle = (event) => {
    setCurrentTitle(event.target.value);
  };

  const handleLoads = (note) => {
    setCurrentText(note.text);
    setCurrentTitle(note.title);
    setCurrentNote(note);
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (!currentTitle || !currentText) return;
    if (currentNote) {
      editNote();
    } else {
      createNote();
    }
    setCurrentText("");
    setCurrentTitle("");
    setCurrentNote(null);
  };

  useEffect(() => {
    const notesTaken = JSON.parse(window.localStorage.getItem("notes"));
    setNotes(notesTaken);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const editNote = () => {
    const id = currentNote.id;
    const newNote = {
      id,
      title: currentTitle,
      text: currentText,
    };
    setNotes(notes.map((element) => (element.id === id ? newNote : element)));
  };

  const createNote = () => {
    const id = nanoid();
    const newNote = {
      id,
      title: currentTitle,
      text: currentText,
    };
    setNotes((notes) => [...notes, newNote]);
  };

  console.log(notes);
  return (
    <>
      <nav>
        <NavNoteBar
          notes={notes}
          deleteNote={deleteNote}
          handleLoads={handleLoads}
        />
      </nav>

      <div className="contentSpace">
        <NoteDisplay textToDisplay={currentText} title={currentTitle} />
        <MarkDownInput
          handleChangeText={handleChangeText}
          handleChangeTitle={handleChangeTitle}
          handleSave={handleSave}
          currentText={currentText}
          currentTitle={currentTitle}
        />
      </div>
    </>
  );
}

export default App;
