import Empty from "./components/Empty";
// import NoteComposer from "./components/NoteComposer";
import NoteComposerr from "./components/NoteComposerr";
import NoteItem from "./components/NoteItem";
import SearchItem from "./components/SearchItem";
import { useNotes } from "./hooks/useNotes";

const App = () => {
  const {
    notes,
    deleteNote,
    pinNote,
    searchItem,
    setSearchItem,
    noteComposerRef,
    editNoteTest,
    cancelEdit,
    editingNoteId,
    saveEdit,
    // editingText,
    // setEditingText,
    emptyHandle,
    handleAddNote,
    color,
    setColor,
    colors,
    input,
    setInput,
  } = useNotes();

  return (
    <div className="bg-[#f7f9fa] min-h-screen">
      <div className="mx-auto max-w-[900px] px-2">
        <h1 className="text-center font-bold text-2xl pt-3">Sticky Notes</h1>
        {/* <NoteComposer
          onAdd={addNote}
          noteComposerRef={noteComposerRef}
          onCancel={cancelEdit}
          editingNoteId={editingNoteId}
          saveEdit={saveEdit}
          editingText={editingText}
          setEditingText={setEditingText}
        /> */}
        <NoteComposerr
          handleAddNote={handleAddNote}
          colors={colors}
          color={color}
          setColor={setColor}
          input={input}
          setInput={setInput}
          noteComposerRef={noteComposerRef}
          editingNoteId={editingNoteId}
          onCancel={cancelEdit}
          handleUpdateNote={saveEdit}
        />
        <SearchItem value={searchItem} onChange={setSearchItem} />
        {notes.length > 0 ? (
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 pb-2">
            <NoteItem
              notes={notes}
              onDelete={deleteNote}
              onPinned={pinNote}
              startEdit={editNoteTest}
            />
          </div>
        ) : (
          <Empty emptyHandle={emptyHandle} />
        )}
      </div>
    </div>
  );
};

export default App;
