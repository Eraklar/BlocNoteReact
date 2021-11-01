


export const Note = ({note, deleteNote, handleLoads}) =>{

    
    return(
        <div className="note" onClick={() => handleLoads(note)}>
            <h3>{note.currentTitle}</h3>
            <div>{note.currentText}</div>
            <button onClick={() => deleteNote(note)}>Delete</button>
        </div>
    )
}