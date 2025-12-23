import { Link } from "react-router-dom";
import { FiUser, FiBell, FiClock, FiStar, FiLogOut } from "react-icons/fi";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#111] text-white p-6 pb-24">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {/* Avatar */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/images/profile-avatar.png"
          className="w-28 h-28 rounded-full border-4 border-yellow-400 object-cover"
          alt="Profile"
        />
        <h2 className="text-2xl mt-3 font-semibold">User</h2>
        <p className="text-yellow-400">Premium Member</p>
      </div>

      {/* Options */}
      <div className="space-y-4">
        <button className="w-full bg-[#1F1F1F] p-4 rounded-xl flex items-center gap-3">
          <FiUser className="text-yellow-400 text-xl" /> Edit Profile
        </button>
        <button className="w-full bg-[#1F1F1F] p-4 rounded-xl flex items-center gap-3">
          <FiBell className="text-yellow-400 text-xl" /> Notifications
        </button>
        <button className="w-full bg-[#1F1F1F] p-4 rounded-xl flex items-center gap-3">
          <FiClock className="text-yellow-400 text-xl" /> Workout History
        </button>
        <button className="w-full bg-[#1F1F1F] p-4 rounded-xl flex items-center gap-3">
          <FiStar className="text-yellow-400 text-xl" /> Saved Workouts
        </button>
        <button className="w-full bg-[#1F1F1F] p-4 rounded-xl flex items-center gap-3 text-red-400">
          <FiLogOut className="text-red-400 text-xl" /> Logout
        </button>
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