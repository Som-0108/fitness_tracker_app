import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-4 flex justify-between items-center text-white shadow-md">
      <h1 className="font-bold text-xl">Fitness App</h1>
      <div className="flex gap-4">
        <button onClick={() => navigate("/dashboard")} className="hover:underline">Dashboard</button>
        <button onClick={() => navigate("/workout-plan")} className="hover:underline">Workout</button>
        <button onClick={() => navigate("/profile")} className="hover:underline">Profile</button>
      </div>
    </nav>
  );
}