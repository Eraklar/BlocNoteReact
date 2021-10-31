import React from "react";
import { useNotes } from "../hooks/notesHooks";
import { Note } from "./Note";

export const NavNoteBar = ({notes, deleteNote, updateNote}) =>{

  return (
    <ul>
      {notes.map((note) => 
        <Note note={note} deleteNote={deleteNote} updateNote={updateNote}/>,
      )}
    </ul>
  );
};
