import React from "react";
import { useNotes } from "../hooks/notesHooks";
import NoteDisplay from "./NoteDisplay";

export const NavNoteBar = ({ notes }) =>{
  return (
    <ul>
      {notes.map((note,index) => 
        <li key={index}>{note}</li>
      )}
    </ul>
  );
};
