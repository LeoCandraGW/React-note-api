import React from 'react'
// import { addNote } from '../Utils/local-data'
import { addNote } from '../Utils/network-data';
import NoteCreate from '../Components/NoteCreate'
import { useNavigate } from 'react-router-dom';

function NoteCreatePage(){
    const navigate = useNavigate();

    async function onAddNoteHandler(note){
        await addNote(note);
        navigate('/all-note');
    }

    return (
        <section>
            <h2>Tambah Note</h2>
            <NoteCreate addNote={onAddNoteHandler}/>
        </section>
    )
}

export default NoteCreatePage