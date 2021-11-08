


export const Note = ({note, deleteNote, handleLoads}) =>{

    
    return(
        <div className="note">
            <div onClick={() => handleLoads(note)}>
            <h3>{(note.title).substring(0,15)}</h3>
            <div>{(note.text).substring(0,15)}</div>
            </div>
            
            <div className="buttonSpace">
                <button onClick={() => deleteNote(note)}>
                X</button>
            </div>
            
        </div>
    )
}