import React from "react";
import { Note } from "./Note";

export const NavNoteBar = ({notes, deleteNote, handleLoads}) =>{

  
  return (
    <div className="NavNoteBar">
      <h1>Mes Notes </h1>
      {notes.map((note) => 
        <Note note={note} key={note.id} deleteNote={deleteNote} handleLoads={handleLoads}/>,
      )}
    </div>
  );
};
