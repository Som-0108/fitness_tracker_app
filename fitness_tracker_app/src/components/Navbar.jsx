import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 flex justify-around shadow-md rounded-b-lg">
      <button
        className="text-white font-bold hover:underline"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
      <button
        className="text-white font-bold hover:underline"
        onClick={() => navigate("/workout-plan")}
      >
        Workout Plan
      </button>
      <button
        className="text-white font-bold hover:underline"
        onClick={() => navigate("/profile")}
      >
        Profile
      </button>
    </nav>
  );
}