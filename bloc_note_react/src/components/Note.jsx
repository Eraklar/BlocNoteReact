


export const Note = ({note, deleteNote, handleLoads}) =>{

    
    return(
        <div className="note" >
            <div onClick={() => handleLoads(note)}>
            <h3>{note.currentTitle}</h3>
            <div>{note.currentText}</div>
            </div>
            
            <div>
                <button onClick={() => deleteNote(note)}>Delete</button>
            </div>
            
        </div>
    )
}