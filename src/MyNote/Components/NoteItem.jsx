import React from "react";
import PropTypes from "prop-types";
import NoteItemHeader from "./NoteItemHeader";
import NoteItemContent from "./NoteItemContent";
import NoteDelete from "./NoteDelete";
import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemHeader title={title} createdAt={createdAt} />
      <NoteItemContent body={body} />
      <div className="note-item_buttons">
      <h3>
        <Link to={`/notes/${id}`} className="note-link" ><BiDetail /> Detail</Link>
      </h3>
        <NoteDelete id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteItem;
