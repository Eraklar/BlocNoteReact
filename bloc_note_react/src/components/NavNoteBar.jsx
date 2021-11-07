import React from "react";
import { Note } from "./Note";

export const NavNoteBar = ({notes, deleteNote, handleLoads}) =>{

  
  return (
    <div className="NavNoteBar">
    
      {notes.map((note) => 
        <Note note={note} key={note.id} deleteNote={deleteNote} handleLoads={handleLoads}/>,
      )}
    </div>
  );
};
