import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Age() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(34);

  const ages = [31, 32, 33, 34, 35, 36, 37];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col p-6">
      {/* Title */}
      <h2 className="text-xl text-gray-300 mt-10 mb-2">How old are you?</h2>
      <p className="text-gray-400 mb-10 text-sm">You can always change it later</p>

      {/* Age List */}
      <div className="flex flex-col gap-4 items-center mt-6">
        {ages.map((age) => (
          <div
            key={age}
            onClick={() => setSelected(age)}
            className={`text-2xl font-semibold cursor-pointer ${
              selected === age
                ? "text-[#F9B233] scale-110"
                : "text-gray-400"
            } transition`}
          >
            {age}
          </div>
        ))}
      </div>

      {/* Next button */}
      <div className="mt-auto flex justify-end">
        <button
          onClick={() => navigate("/weight")}
          className="bg-[#F9B233] text-black py-3 px-6 rounded-lg font-semibold mt-10"
        >
          Next >
        </button>
      </div>
    </div>
  );
}