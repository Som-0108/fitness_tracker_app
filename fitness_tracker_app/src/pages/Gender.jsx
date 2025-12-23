import { useNavigate } from "react-router-dom";
import { FaMale, FaFemale } from "react-icons/fa";

export default function Gender() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200 flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">
        Select Your Gender
      </h1>

      <div className="flex gap-6">
        <button className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
          <FaMale className="text-5xl text-blue-600 mb-2" />
          <p className="font-semibold">Male</p>
        </button>

        <button className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
          <FaFemale className="text-5xl text-pink-600 mb-2" />
          <p className="font-semibold">Female</p>
        </button>
      </div>

      <button
        onClick={() => navigate("/age")}
        className="bg-[#F9B233] text-black py-3 px-6 rounded-lg font-semibold mt-10"
      >
        Next <span className="text-xl">›</span>
      </button>
    </div>
  );
}