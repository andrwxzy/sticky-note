import React from "react";
import { Search } from "lucide-react";
const SearchItem = () => {
  return (
    <div className="my-5">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search Notes..."
          className="w-full bg-white pl-10 pr-3 py-3 rounded border border-gray-300"
        />
      </div>
    </div>
  );
};

export default SearchItem;
