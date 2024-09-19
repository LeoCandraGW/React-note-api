import React from 'react';
import PropTypes from 'prop-types';

function NoteDelete({ id, onDelete }) {
  return (
    <button className="note-item_delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

NoteDelete.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default NoteDelete;
