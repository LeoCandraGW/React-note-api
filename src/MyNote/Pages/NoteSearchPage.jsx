import React from "react";
import NoteList from "../Components/NoteList";
// import { deleteNote, getAllNotes } from "../Utils/local-data";
import NoteSearch from "../Components/NoteSearch";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes, deleteNote } from "../Utils/network-data";

function NoteSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allNotes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);
  async function onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    setAllNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = allNotes.filter((note)=>{
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    )
  })
 
  return (
    <div className="note-list-page">
      <h2>Search Note</h2>
      <NoteSearch keyword={keyword} keywordChange={onKeywordChangeHandler}/>
      <h2>All Note</h2>
      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
      ) : (
        <p>Tidak Ada Note</p>
      )}
    </div>
  );
}
export default NoteSearchPage;
