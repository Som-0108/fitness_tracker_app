import { useNavigate } from "react-router-dom";
import { FaBirthdayCake } from "react-icons/fa";

export default function Age() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200 flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">
        How Old Are You?
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <FaBirthdayCake className="text-5xl text-purple-600 mb-3" />
        <input
          type="number"
          placeholder="Enter age"
          className="border rounded-lg p-3 text-center w-40 mt-2"
        />
      </div>

      <button
        onClick={() => navigate("/weight")}
        className="bg-[#F9B233] text-black py-3 px-6 rounded-lg font-semibold mt-10"
      >
        Next <span className="text-xl">›</span>
      </button>
    </div>
  );
}