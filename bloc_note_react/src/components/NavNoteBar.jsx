import React from "react";
import { Note } from "./Note";

export const NavNoteBar = ({notes, deleteNote, updateNote, handleLoads}) =>{

  
  return (
    <ul>
      {notes.map((note) => 
        <Note note={note} key={note.id} deleteNote={deleteNote} updateNote={updateNote} handleLoads={handleLoads}/>,
      )}
    </ul>
  );
};
