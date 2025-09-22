import NoteComposer from "./components/NoteComposer";
import NoteItem from "./components/NoteItem";
import SearchItem from "./components/SearchItem";

const App = () => {
  return (
    <div className="bg-[#f7f9fa]">
      <div className="h-screen mx-auto max-w-[900px] px-2">
        <h1 className="text-center font-bold text-2xl">Sticky Notes</h1>
        <NoteComposer />
        <SearchItem />
        <div>
          <NoteItem />
        </div>
      </div>
    </div>
  );
};

export default App;
