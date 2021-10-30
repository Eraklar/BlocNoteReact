
import React from "react";
export default function MarkDownInput(props){

    return(
        <form>
            <label>
                <textarea value={props.text} onChange={props.handleChange}></textarea>
            </label>
        </form>
    )
}