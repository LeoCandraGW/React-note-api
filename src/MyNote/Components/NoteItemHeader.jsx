import React from "react";
import { showFormattedDate } from "../Utils/format-date";
import PropTypes from 'prop-types'
function NoteItemHeader({ title, createdAt }) {
  return (
    <div className="note-item_header">
      <h3 className="note-item_title">{title}</h3>
      <p className="note-item_date">{showFormattedDate(createdAt)}</p>
    </div>
  );
}

NoteItemHeader.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteItemHeader;
