import { useState } from "react";
import {
  Plus,
  TriangleAlert,
  Bold,
  Italic,
  List,
  Underline,
  Strikethrough,
} from "lucide-react";

interface Props {
  onAdd: (text: string, color: string) => void;
  noteComposerRef: React.RefObject<HTMLTextAreaElement | null>;

  editingNoteId: number | null;
  onCancel: () => void;
  saveEdit: () => void;
  editingText: string;
  setEditingText: React.Dispatch<React.SetStateAction<string>>;
}

const NoteComposer = ({
  onAdd,
  noteComposerRef,
  onCancel,
  editingNoteId,
  saveEdit,
  editingText,
  setEditingText,
}: Props) => {
  const colors = ["yellow", "pink", "green"];
  const [input, setInput] = useState("");
  const [color, setColor] = useState(colors[0]);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleAddNote = () => {
    if (editingNoteId !== null) {
      saveEdit();
      setInput("");
      console.log("the button was cliked");
    } else if (input.length < 1) {
      setError(true);
    } else {
      onAdd(input, color);
      setInput("");
      setError(false);
      console.log("the button was cliked");
    }
  };

  return (
    <div
      className=" border border-gray-300 p-4 rounded mt-10"
      style={{ backgroundColor: `var(--color-${color})` }}
    >
      <textarea
        ref={noteComposerRef}
        value={editingNoteId !== null ? editingText : input}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onChange={(e) =>
          editingNoteId !== null
            ? setEditingText(e.target.value)
            : setInput(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleAddNote();
          }
        }}
        autoFocus
        maxLength={500}
        placeholder="What's on your mind?"
        className={`border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded pb-20 pt-3 pl-2 pr-2 w-full wrap-anywhere lg:overflow-hidden`}
      />
      {show && (
        <div className="*:cursor-pointer flex gap-2 ">
          <button>
            <Bold size={18} />
          </button>
          <button>
            <Italic size={18} />
          </button>
          <button>
            <Underline size={18} />
          </button>
          <button>
            <Strikethrough size={18} />
          </button>
          <button>
            <List size={18} />
          </button>
        </div>
      )}
      {error && (
        <div className="flex text-sm text-red-500">
          <TriangleAlert color="white" fill="red" size={19} />
          Please enter a Note.
        </div>
      )}
      <div className="flex items-center justify-between my-2">
        <p className="text-sm text-gray-500">{input.length}/500</p>
        <div className="flex gap-1">
          {colors.map((c) => (
            <button
              key={c}
              className={`rounded-full p-3 cursor-pointer ${
                color === c ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: c }}
              onClick={() => setColor(c)}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          role="button"
          tabIndex={0}
          onClick={handleAddNote}
          className="flex items-center gap-1 cursor-pointer bg-red-700 hover:bg-red-800 text-white rounded-lg text-sm px-5 py-2.5 font-medium"
        >
          {editingNoteId !== null ? "Update Note" : "Add Note"}
          <Plus size={18} />
        </button>
        {editingNoteId && (
          <button
            className="bg-gray-400 hover:bg-gray-500 text-black rounded-lg px-4 py-2"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default NoteComposer;
