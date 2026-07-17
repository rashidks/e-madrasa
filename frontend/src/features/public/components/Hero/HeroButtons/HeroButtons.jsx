import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      <button className="flex items-center gap-3 rounded-xl bg-green-700 px-8 py-4 text-white transition hover:bg-green-800">
        Start Learning
        <FaArrowRight />
      </button>

      <button className="flex items-center gap-3 rounded-xl border bg-white px-8 py-4 shadow hover:bg-gray-100">
        <FaPlayCircle className="text-green-700" />
        Watch Demo
      </button>

    </div>
  );
};

export default HeroButtons;