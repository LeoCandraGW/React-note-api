import React from "react";
import NoteListPage from "./Pages/NoteListPage";
import HomePage from "./Pages/HomePage";
import NoteDetailPageWrapper from "./Pages/NoteDetailPage";
import Navigation from "./Components/Navigation";
import { Routes, Route } from "react-router-dom";
import NoteCreatePage from "./Pages/NoteCreatePage";
import NotFoundPage from "./Pages/NotFoundPage";
import NoteSearchPageWrapper from "./Pages/NoteSearchPage";
import useAuth from "./Hooks/useAuth";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function NoteApp() {
  const { authedUser, initializing, onLoginSuccess, onLogout } = useAuth();

  if (initializing) {
    return <p>Loading...</p>;
  }

  if (authedUser === null) {
    return (
      <div className="note-app">
        <header className="note-app__header">
          <h1>Note App</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>My Note App</h1>
        <Navigation logout={onLogout} name={authedUser.name} />
      </header>
      <main style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-note" element={<NoteListPage />} />
          <Route path="/notes/:id" element={<NoteDetailPageWrapper />} />
          <Route path="/add-note" element={<NoteCreatePage />} />
          <Route path="/search-note" element={<NoteSearchPageWrapper />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default NoteApp;
