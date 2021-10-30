
import React from "react";
import { useNotes } from "../hooks/notesHooks";
import NoteDisplay from "./NoteDisplay";

export default function NavNoteBar(){

    const [notes, setNotes] = useNotes(); 

    const createNoteDisplay = (noteList) => {
        if(notes.length > 0){
            notes.map((note,index) => <NoteDisplay className="note" id={index} title={note['title']} content={note['content']}/>)
        }else{
            return <p> Pas de notes pour le moment</p>
        }
    }
    return( 
        <div className="containerNotes">
            {createNoteDisplay(notes)}
        </div>
    )
}