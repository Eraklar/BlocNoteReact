import { useState, useEffect } from "react";


export default function useNotes(){

    const [notes , setNotes] = useState([]);
    
    useEffect(() => {
        const Stringnotes = localStorage.getItem("content");
        setNotes(JSON.parse(Stringnotes));
    }, []);

    return {notes,setNotes};
    
}