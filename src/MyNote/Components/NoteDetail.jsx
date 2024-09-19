import React from 'react'
import PropTypes from 'prop-types'

import NoteItemHeader from './NoteItemHeader'
import NoteItemContent from './NoteItemContent'
function NoteDetail({ title, body, createdAt }){
    return(
        <div className='note-item'>
            <NoteItemHeader title={title} createdAt={createdAt} />
            <NoteItemContent body={body}/>
        </div>
    )
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteDetail;