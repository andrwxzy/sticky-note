import { useEffect, useState } from "react";

export interface Note {
  id: number;
  text: string;
  color?: string;
  pinned?: boolean;
}

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });

  //   save notes to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //   add new note
  const addNote = (text: string) => {
    if (!text.trim()) return;
    const newNote: Note = {
      id: Date.now(),
      text,
      pinned: false,
    };
    setNotes((prev) => [...prev, newNote]);
  };
  //  Delete note
  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return { notes, addNote, deleteNote };
}
