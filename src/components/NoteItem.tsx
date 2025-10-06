import { Trash2, SquarePen, Pin } from "lucide-react";
import type { Note } from "../hooks/useNotes";

type NoteProps = {
  notes: Note[];
  onDelete: (id: number) => void;
  onPinned: (id: number) => void;
  startEdit: (note: Note) => void;
};

const NoteItem = ({ notes, onDelete, onPinned, startEdit }: NoteProps) => {
  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          style={{ backgroundColor: note.color }}
          className="p-5 border-2 rounded"
        >
          <div
            className={`flex items-center justify-between gap-4 bg-${note.color}-200`}
          >
            <div
              className="prose break-all"
              dangerouslySetInnerHTML={{ __html: note.text }}
            />
            <div className="flex gap-4">
              <button
                onClick={() => {
                  onPinned(note.id);
                  console.log(`id: ${note.id}`);
                }}
                title="pinned"
                className="text-gray-500 hover:text-gray-700 cursor-pointer "
              >
                {note.isPinned ? (
                  <Pin size={18} fill="red" color="red" />
                ) : (
                  <Pin size={18} />
                )}
              </button>
              <button
                onClick={() => {
                  startEdit(note);
                }}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
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
