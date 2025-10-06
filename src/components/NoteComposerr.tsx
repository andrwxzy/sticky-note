import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import {
  Plus,
  //   TriangleAlert,
  Bold,
  Italic,
  List,
  Underline,
  Strikethrough,
} from "lucide-react";
import { useEffect, useState } from "react";

type PropsAdd = {
  handleAddNote: (html: string) => void;
  color: string;
  colors: string[];
  setColor: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  noteComposerRef: React.RefObject<HTMLDivElement | null>;
  editingNoteId: number | null;
  onCancel: () => void;
  handleUpdateNote: (updatedHTML: string) => void;
};

const NoteComposerr = ({
  handleAddNote,
  colors,
  color,
  setColor,
  input,
  noteComposerRef,
  editingNoteId,
  onCancel,
  handleUpdateNote,
}: PropsAdd) => {
  const [renderCount, setRenderCount] = useState(0);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "What's on your mind",
      }),
    ],
    content: "",
  });

  const handleSave = () => {
    if (!editor) return;
    const html = editor.getHTML();
    if (!html.trim().length) return;
    if (editingNoteId !== null) {
      handleUpdateNote(html);
    } else {
      handleAddNote(html);
    }
  };

  useEffect(() => {
    if (!editor) return;

    const update = () => setRenderCount((prev) => prev + 1);

    editor.on("selectionUpdate", update);
    editor.on("transaction", update);

    return () => {
      editor.off("selectionUpdate", update);
      editor.off("transaction", update);
    };
  }, [editor]);

  useEffect(() => {
    if (editor && input) {
      editor.commands.setContent(input);
    }
  }, [editor, input]);

  return (
    <div
      style={{ backgroundColor: color }}
      className="border border-gray-500 p-4 rounded mt-5"
    >
      <EditorContent
        editor={editor}
        maxLength={500}
        ref={noteComposerRef}
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
        <p className="text-sm text-gray-500">
          {editor.storage.characterCount?.characters() || input.length}/500
        </p>
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
      {/* add note btn */}
      <div className="flex items-center gap-1 mt-2">
        <button
          onClick={handleSave}
          className="flex iitems-center gap-1 cursor-pointer bg-red-700 hover:bg-red-800 text-white rounded-lg text-sm px-5 py-2.5 font-medium"
        >
          {editingNoteId !== null ? "Update Note" : "Add Note"}
          <Plus />
        </button>
        {editingNoteId && (
          <button
            className="bg-gray-400 hover:bg-gray-500 text-black rounded-lg px-5 py-2.5"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default NoteComposerr;
