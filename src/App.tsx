import { useState } from "react";
import NoteComposer from "./components/NoteComposer";
import NoteItem from "./components/NoteItem";
import SearchItem from "./components/SearchItem";
import { useNotes } from "./hooks/useNotes";

const App = () => {
  const { notes, addNote, deleteNote } = useNotes();
  return (
    <div className="bg-[#f7f9fa] h-screen">
      <div className="mx-auto max-w-[900px] px-2">
        <h1 className="text-center font-bold text-2xl pt-3">Sticky Notes</h1>
        <NoteComposer onAdd={addNote} />
        <SearchItem />
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 ">
          <NoteItem notes={notes} onDelete={deleteNote} />
        </div>
      </div>
    </div>
  );
};

export default App;
