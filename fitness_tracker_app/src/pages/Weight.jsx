import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Weight() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(70);

  const weights = [55, 56, 57, 58,67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col p-6">
      {/* Title */}
      <h2 className="text-xl text-gray-300 mt-10 mb-2">What's your weight?</h2>
      <p className="text-gray-400 mb-10 text-sm">
        Help us create a personalized plan for you
      </p>

      {/* Weight List */}
      <div className="flex flex-col gap-4 items-center mt-6">
        {weights.map((kg) => (
          <div
            key={kg}
            onClick={() => setSelected(kg)}
            className={`text-2xl font-semibold cursor-pointer ${
              selected === kg
                ? "text-[#F9B233] scale-110"
                : "text-gray-400"
            } transition transform`}
          >
            {kg} kg
          </div>
        ))}
      </div>

      {/* Next button */}
      <div className="mt-auto flex justify-end">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-[#F9B233] text-black py-3 px-6 rounded-lg font-semibold mt-10"
        >
          Next <span className="text-xl">›</span>
        </button>
      </div>
    </div>
  );
}