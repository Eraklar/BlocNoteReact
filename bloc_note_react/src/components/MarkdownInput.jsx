
import React from "react";


export const MarkDownInput = ({ handleChangeText, handleChangeTitle, currentTitle, currentText, handleSave }) => {
    return(    
        <form className="formMarkdown" onSubmit={handleSave}>
            <input type="text" value={currentTitle} onChange={handleChangeTitle}/>
            <textarea value={currentText} onChange={handleChangeText}/>
            <input type="submit" value="save"/>
        </form>
    );
}