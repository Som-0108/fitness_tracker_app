import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-100 p-4 flex justify-around shadow-md">
      <button
        className="text-blue-500 font-bold"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
      <button
        className="text-green-500 font-bold"
        onClick={() => navigate("/workout-plan")}
      >
        Workout Plan
      </button>
      <button
        className="text-purple-500 font-bold"
        onClick={() => navigate("/profile")}
      >
        Profile
      </button>
    </nav>
  );
}