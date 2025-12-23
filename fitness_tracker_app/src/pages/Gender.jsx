import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMale, FaFemale } from "react-icons/fa";

export default function Gender() {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col p-6">
      {/* Title */}
      <h2 className="text-xl text-gray-300 mt-10 mb-2">Tell us about yourself:</h2>
      <h3 className="text-2xl font-bold mb-10">How do you identify?</h3>

      {/* Gender Options */}
      <div className="flex flex-col gap-8 mt-6">

        {/* Male */}
        <button
          onClick={() => handleSelect("male")}
          className={`flex flex-col items-center p-8 rounded-xl border border-gray-700 transition ${
            selectedGender === "male" ? "bg-[#F9B233]" : "bg-[#1A1A1A]"
          }`}
        >
          <FaMale
            className={`text-6xl mb-4 transition ${
              selectedGender === "male" ? "text-black" : "text-[#F9B233]"
            }`}
          />
          <span className={`text-lg font-semibold transition ${selectedGender === "male" ? "text-black" : "text-white"}`}>
            Male
          </span>
        </button>

        {/* Female */}
        <button
          onClick={() => handleSelect("female")}
          className={`flex flex-col items-center p-8 rounded-xl border border-gray-700 transition ${
            selectedGender === "female" ? "bg-[#F9B233]" : "bg-[#1A1A1A]"
          }`}
        >
          <FaFemale
            className={`text-6xl mb-4 transition ${
              selectedGender === "female" ? "text-black" : "text-[#F9B233]"
            }`}
          />
          <span className={`text-lg font-semibold transition ${selectedGender === "female" ? "text-black" : "text-white"}`}>
            Female
          </span>
        </button>
      </div>

      {/* Next button */}
      <div className="mt-auto flex justify-end">
        <button
          onClick={() => navigate("/age")}
          className="bg-[#F9B233] text-black py-3 px-6 rounded-lg font-semibold mt-10"
        >
          Next <span className="text-xl">›</span>
        </button>
      </div>
    </div>
  );
}