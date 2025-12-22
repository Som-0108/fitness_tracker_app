import { useNavigate } from "react-router-dom";
import { FaMale, FaFemale } from "react-icons/fa";

export default function Gender() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">Select Gender</h2>
      <div className="flex gap-6">
        <button onClick={() => navigate("/age")} className="flex flex-col items-center bg-blue-500 text-white py-6 px-8 rounded-2xl shadow-lg hover:bg-blue-600 transform hover:scale-105 transition">
          <FaMale className="text-4xl mb-2" /> Male
        </button>
        <button onClick={() => navigate("/age")} className="flex flex-col items-center bg-pink-500 text-white py-6 px-8 rounded-2xl shadow-lg hover:bg-pink-600 transform hover:scale-105 transition">
          <FaFemale className="text-4xl mb-2" /> Female
        </button>
      </div>
    </div>
  );
}