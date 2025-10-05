import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
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

const NoteComposerr = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "What's on your mind",
      }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setInput(editor.getText());
    },
  });
  console.log(editor.commands);

  const [input, setInput] = useState("");
  const colors = ["yellow", "pink", "coral"];
  const [color, setColor] = useState(colors[0]);
  return (
    <div
      style={{ backgroundColor: color }}
      className="border border-gray-500 p-4 rounded mt-5"
    >
      <EditorContent
        editor={editor}
        maxLength={500}
        className="bg-white border border-gray-300 h-20 rounded focus:outline-none 
    focus:ring-2 focus:ring-blue-500 focus:ring-inset list-disc"
      />
      {/* toolbar */}
      <div className="flex gap-1 *:cursor-pointer my-2">
        <button
          className={`${editor.isActive("bold") ? "bg-gray-200 p-2" : ""}`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={18} />
        </button>
        <button
          className={`p-2 rounded ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={18} />
        </button>
        <button
          className={`p-2 rounded ${
            editor.isActive("underline") ? "bg-gray-200" : ""
          }`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline size={18} />
        </button>
        <button
          className={`p-2 rounded ${
            editor.isActive("strike") ? "bg-gray-200" : ""
          }`}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough size={18} />
        </button>
        <button
          className={`p-2 rounded ${
            editor.isActive("bulletList") ? "bg-gray-200" : ""
          }`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={18} />
        </button>
      </div>
      {/* color selection and input length */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{input.length}/500</p>
        <div className="flex gap-1">
          {colors.map((c) => (
            <button
              onClick={() => setColor(c)}
              key={c}
              className={`rounded-full p-3 cursor-pointer ${
                color === c ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: c }}
            ></button>
          ))}
        </div>
      </div>
      <button className="flex iitems-center gap-1 cursor-pointer bg-red-700 hover:bg-red-800 text-white rounded-lg text-sm px-5 py-2.5 font-medium mt-2">
        Add note <Plus />
      </button>
    </div>
  );
};

export default NoteComposerr;
