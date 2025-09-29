import { useEffect, useRef, useState } from "react";

export interface Note {
  id: number;
  text: string;
  color: string;
  isPinned: boolean;
}

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });
  const [searchItem, setSearchItem] = useState("");

  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  const noteComposerRef = useRef<HTMLDivElement>(null);

  //   save notes to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  console.log(notes);
  //   add new note
  const addNote = (text: string, color: string) => {
    if (!text.trim()) return;
    const newNote: Note = {
      id: Date.now(),
      text,
      isPinned: false,
      color,
    };
    setNotes((prev) => [...prev, newNote]);
  };
  //  Delete note
  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const editNote = (id: number, text: string) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, text } : n)));
    console.log(editNote);
  };

  // Toggle pin note
  const pinNote = (id: number) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note
      )
    );
  };

  // sorted notes for pin. not working any more. saving it for reference
  // const sortedNotes = [...notes].sort((a, b) => {
  //   if (a.isPinned === b.isPinned) return 0;
  //   return a.isPinned ? -1 : 1;
  // });

  // sorted + filter
  const filterNote = notes
    .filter((note) =>
      note.text.toLowerCase().includes(searchItem.toLowerCase())
    )
    .sort((a, b) => {
      if (a.isPinned === b.isPinned) return 0;
      return a.isPinned ? -1 : 1;
    });

  // edit note
  const editNoteTest = (note: Note) => {
    setEditingNoteId(note.id);
    setEditingText(note.text);
    noteComposerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // save edit note
  const saveEdit = () => {
    if (!editingNoteId) return;
    const updateNote = notes.map((note) =>
      note.id === editingNoteId ? { ...note, text: editingText } : note
    );
    setNotes(updateNote);
    localStorage.setItem("notes", JSON.stringify(updateNote));
  };

  //cancel edit
  const cancelEdit = () => {
    setEditingNoteId(null);
    setEditingText("");
  };

  return {
    notes: filterNote,
    addNote,
    deleteNote,
    editNote,
    pinNote,
    searchItem,
    setSearchItem,
    noteComposerRef,
    editNoteTest,
    editingNoteId,
    editingText,
    setEditingText,
    saveEdit,
    cancelEdit,
  };
}
