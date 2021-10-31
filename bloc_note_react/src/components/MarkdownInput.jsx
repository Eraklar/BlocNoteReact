import { useState } from "react";
import React from "react";


export const MarkDownInput = ({ handleChangeText, handleChangeTitle, notes, save }) => {
    return(    
        <form onSubmit={save}>
            <input type="text" value={notes.title} onChange={handleChangeTitle}/>
            <textarea value={notes.content} onChange={handleChangeText}/>
            <input type="submit" value="save"/>
        </form>
    );
}