import NoteComposer from "./components/NoteComposer";
import NoteItem from "./components/NoteItem";
import SearchItem from "./components/SearchItem";
import { useNotes } from "./hooks/useNotes";

const App = () => {
  const {
    notes,
    handleAddNote,
    deleteNote,
    editNote,
    pinNote,
    searchItem,
    setSearchItem,
    input,
    setColor,
    setInput,
    keyDown,
    colors,
    color,
  } = useNotes();

  return (
    <div className="bg-[#f7f9fa] min-h-screen">
      <div className="mx-auto max-w-[900px] px-2">
        <h1 className="text-center font-bold text-2xl pt-3">Sticky Notes</h1>
        <NoteComposer
          handleAddNote={handleAddNote}
          value={input}
          setColor={setColor}
          setInput={setInput}
          keyDown={keyDown}
          colors={colors}
          color={color}
        />
        <SearchItem value={searchItem} onChange={setSearchItem} />
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 pb-2">
          <NoteItem
            notes={notes}
            onDelete={deleteNote}
            onEdit={editNote}
            onPinned={pinNote}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
