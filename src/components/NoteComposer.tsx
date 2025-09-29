import { Plus } from "lucide-react";
interface Props {
  handleAddNote: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  colors: string[];
  color: string;
  keyDown: React.KeyboardEventHandler<HTMLElement>;
}

const NoteComposer = ({
  handleAddNote,
  value,
  setColor,
  setInput,
  keyDown,
  colors,
  color,
}: Props) => {
  return (
    <div
      className=" border border-gray-300 p-4 rounded mt-10"
      style={{ backgroundColor: `var(--color-${color})` }}
    >
      <textarea
        value={value}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={keyDown}
        autoFocus
        maxLength={500}
        placeholder="What's on your mind?"
        className="border border-gray-300 rounded pb-20 pt-3 pl-2 pr-2 w-full wrap-anywhere lg:overflow-hidden"
      />
      <div className="flex items-center justify-between my-2">
        <p className="text-sm text-gray-500">{value.length}/500</p>
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
      <button
        role="button"
        tabIndex={0}
        onClick={handleAddNote}
        className="flex items-center gap-1 cursor-pointer bg-red-700 hover:bg-red-800 text-white rounded-lg text-sm px-5 py-2.5 font-medium"
      >
        Add Note
        <Plus size={18} />
      </button>
    </div>
  );
};

export default NoteComposer;
