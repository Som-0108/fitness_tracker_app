import { useNavigate } from "react-router-dom";

export default function Gender() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">Select Gender</h2>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/age")}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Male
        </button>
        <button
          onClick={() => navigate("/age")}
          className="bg-pink-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition"
        >
          Female
        </button>
      </div>
    </div>
  );
}