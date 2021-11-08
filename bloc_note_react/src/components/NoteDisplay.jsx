import Showdown from 'showdown';
import React from 'react';

export default function NoteDisplay({textToDisplay, title}){

    const converter = new Showdown.Converter()

    const content = converter.makeHtml(textToDisplay);

    const createMarkup = () => {
        return {__html: content}
    }

    return(
        <div className="NoteDisplay">
            
            <h1>{title}</h1>
            <div 
                dangerouslySetInnerHTML={createMarkup()} />
        </div>
    )

}