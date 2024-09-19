import React from "react";
import NoteDetail from "../Components/NoteDetail";
import { useParams } from "react-router-dom";
import { getNote } from "../Utils/network-data";

function NoteDetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState(null);

  React.useEffect(() => {
    getNote(id).then((response) => {
      if (response && response.data) {
        setNote(response.data);
      }
    });
  }, [id]);

  return (
    <section>
      <h1>Detail Note</h1>
      {note ? <NoteDetail {...note} /> : <p>Loading note details...</p>}
    </section>
  );
}

export default NoteDetailPage;
