import React from "react";
import { Trash2, SquarePen, Pin } from "lucide-react";
import type { Note } from "../hooks/useNotes";
type NoteProps = { notes: Note[]; onDelete: (id: number) => void };

const NoteItem = ({ notes, onDelete }: NoteProps) => {
  return (
    <>
      {notes.map((note) => (
        <div className="p-5 border-2 rounded">
          <div className="flex items-center justify-between gap-4">
            <ul>
              <li className="break-all" key={note.id}>
                {note.text}
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                <Pin size={18} />
              </button>
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                <SquarePen size={18} />
              </button>
              <button
                onClick={() => onDelete(note.id)}
                className="text-red-400 hover:text-red-500 cursor-pointer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NoteItem;
