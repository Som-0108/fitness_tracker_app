import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="flex flex-col gap-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => navigate("/workout-plan")}
        >
          Workout Plan
        </button>

        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>
      </div>
    </div>
  );
}