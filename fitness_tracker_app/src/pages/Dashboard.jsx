import { Link } from "react-router-dom";
import { FiActivity, FiHeart, FiBarChart2, FiClock } from "react-icons/fi";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#111] text-white p-5 pb-24">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-[#1F1F1F] p-4 rounded-xl">
          <FiActivity className="text-yellow-400 text-2xl mb-2" />
          <h3 className="font-semibold">Calories</h3>
          <p className="text-3xl font-bold">450</p>
        </div>

        <div className="bg-[#1F1F1F] p-4 rounded-xl">
          <FiClock className="text-yellow-400 text-2xl mb-2" />
          <h3 className="font-semibold">Workout</h3>
          <p className="text-3xl font-bold">45 min</p>
        </div>

        <div className="bg-[#1F1F1F] p-4 rounded-xl">
          <FiBarChart2 className="text-yellow-400 text-2xl mb-2" />
          <h3 className="font-semibold">Steps</h3>
          <p className="text-3xl font-bold">7,820</p>
        </div>

        <div className="bg-[#1F1F1F] p-4 rounded-xl">
          <FiHeart className="text-yellow-400 text-2xl mb-2" />
          <h3 className="font-semibold">Heart Rate</h3>
          <p className="text-3xl font-bold">103 bpm</p>
        </div>
      </div>

      {/* Daily Tip */}
      <div className="bg-[#1F1F1F] p-5 rounded-xl">
        <h2 className="text-yellow-400 font-semibold mb-2">Daily Tip</h2>
        <p className="opacity-80">
          Consistency beats intensity — show up every day and watch your results compound.
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-[#1A1A1A] py-3 flex justify-around border-t border-gray-800">
        <Link to="/dashboard" className="text-yellow-400">🏠</Link>
        <Link to="/workout-plan" className="text-yellow-400">💪</Link>
        <Link to="/profile" className="text-yellow-400">👤</Link>
      </div>
    </div>
  );
}