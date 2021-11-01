


export const Note = ({note, deleteNote, handleLoads}) =>{

    
    return(
        <div className="note" >
            <div onClick={() => handleLoads(note)}>
            <h3>{note.title}</h3>
            <div>{note.text}</div>
            </div>
            
            <div>
                <button onClick={() => deleteNote(note)}>Delete</button>
            </div>
            
        </div>
    )
}