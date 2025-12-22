import { useNavigate } from "react-router-dom";

export default function Weight() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Enter your weight</h2>

      <input
        type="number"
        placeholder="Weight (kg)"
        className="border p-2 mb-4 rounded w-64"
      />

      <button
        onClick={() => navigate("/dashboard")}
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
      >
        Continue
      </button>
    </div>
  );
}