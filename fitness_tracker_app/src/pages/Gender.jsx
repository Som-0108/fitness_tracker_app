import { useNavigate } from "react-router-dom";
import { FaMale, FaFemale } from "react-icons/fa";

export default function Gender() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col p-6">
      {/* Title */}
      <h2 className="text-xl text-gray-300 mt-10 mb-2">Tell us about yourself:</h2>
      <h3 className="text-2xl font-bold mb-10">How do you identify?</h3>

      {/* Gender Options */}
      <div className="flex flex-col gap-8 mt-6">

        {/* Male */}
        <button
          onClick={() => navigate("/age")}
          className="flex flex-col items-center bg-[#1A1A1A] p-8 rounded-xl border border-gray-700"
        >
          <FaMale className="text-[#F9B233] text-6xl mb-4" />
          <span className="text-lg font-semibold">Male</span>
        </button>

        {/* Female */}
        <button
          onClick={() => navigate("/age")}
          className="flex flex-col items-center bg-[#1A1A1A] p-8 rounded-xl border border-gray-700"
        >
          <FaFemale className="text-[#F9B233] text-6xl mb-4" />
          <span className="text-lg font-semibold">Female</span>
        </button>
      </div>

      {/* Next button */}
      <div className="mt-auto flex justify-end">
        <button
          onClick={() => navigate("/age")}
          className="bg-[#F9B233] text-black py-3 px-6 rounded-lg font-semibold mt-10"
        >
          Next >
        </button>
      </div>
    </div>
  );
}