import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types'
function NoteList({notes, onDelete}){
    return(
        <div className='note-list'>
            {
                notes.map((note)=>(
                    <NoteItem key={note.id} onDelete={onDelete} {...note}/>
                ))
            }
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
}
export default NoteList;