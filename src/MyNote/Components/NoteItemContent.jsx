import React from 'react';
import PropTypes from 'prop-types'
function NoteItemContent({ body }) {
  return (
    <div className="note-item_body">
      <p className="note-item_desk">{body}</p>
    </div>
  );
}

NoteItemContent.propTypes = {
    body: PropTypes.string.isRequired,
}



export default NoteItemContent;
