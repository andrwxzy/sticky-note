import React, { useState } from "react";
import { Plus } from "lucide-react";
interface Props {
  onAdd: (text: string) => void;
}

const NoteComposer = ({ onAdd }: Props) => {
  const [input, setInput] = useState("");
  const handleAddNote = () => {
    onAdd(input);
    setInput("");
  };

  return (
    <div className="bg-white border border-gray-300 p-4 rounded mt-10">
      <textarea
        onChange={(e) => setInput(e.target.value)}
        maxLength={500}
        placeholder="What's on your mind?"
        className="border border-gray-300 rounded pb-20 pt-3 pl-2 pr-2 w-full wrap-anywhere lg:overflow-hidden"
      />
      <div className="flex items-center justify-between my-2">
        <p className="text-sm text-gray-500">{input.length}/500</p>
        <div className="flex gap-1">
          <button className="bg-[#007BFF] active:border-2 rounded-full p-3 cursor-pointer"></button>
          <button className="bg-[#FF0000] rounded-full p-3 cursor-pointer"></button>
          <button className="bg-[#28A745] rounded-full p-3 cursor-pointer"></button>
        </div>
      </div>
      <button
        onClick={handleAddNote}
        className="flex items-center gap-1 cursor-pointer bg-red-700 hover:bg-red-800 text-white rounded-lg text-sm px-5 py-2.5 font-medium"
      >
        {" "}
        Add Note
        <Plus size={18} />
      </button>
    </div>
  );
};

export default NoteComposer;
