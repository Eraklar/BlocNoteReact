
import React from "react";


export const MarkDownInput = ({ handleChangeText, handleChangeTitle, currentTitle, currentText, handleSave }) => {
    return(    
        <form className="formMarkdown" onSubmit={handleSave}>
            <input type="text" id="titleInput" value={currentTitle} onChange={handleChangeTitle}/>
            <textarea value={currentText} onChange={handleChangeText}/>
            <input type="submit" id="saveInput"value="save"/>
        </form>
    );
}