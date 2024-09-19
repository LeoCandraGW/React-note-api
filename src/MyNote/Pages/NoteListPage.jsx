import React from 'react';
import NoteList from '../Components/NoteList';
// import { getAllNotes, deleteNote } from '../Utils/local-data';
import { getActiveNotes, deleteNote } from '../Utils/network-data';


function NoteListPage() {
  const [allNotes, setAllNotes] = React.useState([]);

  React.useEffect(() => {
    getActiveNotes().then(({data})=>{
      setAllNotes(data)
    })
  }, []);

  async function onDeleteHandler(id){
    await deleteNote(id);

    const {data} = await getActiveNotes()
    setAllNotes(data)
  }

  const activeNotes = allNotes;
  return (
    <div className="note-list-page">
      <h2>All Note</h2>
      {activeNotes.length > 0 ? (
        <NoteList notes={allNotes} onDelete={onDeleteHandler} />
      ) : (
        <p>Tidak Ada Note</p>
      )}
    </div>
  );
}

export default NoteListPage;
