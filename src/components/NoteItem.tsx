import React from "react";
import { Trash2, SquarePen, Pin } from "lucide-react";

const NoteItem = () => {
  return (
    <div className="p-5 border-2 rounded">
      <div className="flex items-center justify-between">
        <p>ds</p>
        <div className="flex gap-4  ">
          <button className="text-gray-500 cursor-pointer">
            {" "}
            <Pin size={18} />
          </button>
          <button className="text-gray-500 cursor-pointer">
            {" "}
            <SquarePen size={18} />
          </button>
          <button className="text-red-400 cursor-pointer">
            {" "}
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <p className="text-gray-500 text-sm">Sep 20, 07:50 PM</p>
    </div>
  );
};

export default NoteItem;
