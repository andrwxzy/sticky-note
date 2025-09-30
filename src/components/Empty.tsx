import EmptyImg from "../assets/empty-img.png";
import { Plus } from "lucide-react";
type Props = { emptyHandle: () => void };

const Empty = ({ emptyHandle }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-[180px] h-[200px]" src={EmptyImg} alt="Empty icon" />
      <h3 className="text-2xl text-gray-400 font-medium">
        Your note is <span className="text-red-500">Empty</span>
      </h3>
      <p className="text-gray-400 text-sm">Add note to get started</p>
      <button
        onClick={emptyHandle}
        className="my-5 flex items-center gap-1 cursor-pointer bg-red-700 hover:bg-red-800 text-white rounded-lg text-sm px-5 py-2.5 font-medium"
      >
        Add
        <Plus size={18} />
      </button>
    </div>
  );
};

export default Empty;
