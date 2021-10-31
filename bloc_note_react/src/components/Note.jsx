import { useImperativeHandle } from "react"


export const Note = ({note, deleteNote, updateNote}) =>{

    return(
        <div className="note">
            <h3>{note.currentTitle}</h3>
            <div>{note.currentText}</div>
            <button onClick={deleteNote}></button>
            <button onClick={updateNote}></button>
        </div>
    )
}