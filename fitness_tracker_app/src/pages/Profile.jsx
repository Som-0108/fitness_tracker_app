export default function Profile() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {/* Avatar */}
      <div className="w-28 h-28 rounded-full bg-[#2A2A2A] mx-auto mb-4"></div>
      <h2 className="text-center text-xl font-semibold">Julius</h2>
      <p className="text-center text-yellow-400 mb-8">Premium Member</p>

      {/* Profile Options */}
      <div className="space-y-4">
        <button className="w-full bg-[#2A2A2A] p-4 rounded-xl text-left">
          Edit Profile
        </button>

        <button className="w-full bg-[#2A2A2A] p-4 rounded-xl text-left">
          Notifications
        </button>

        <button className="w-full bg-[#2A2A2A] p-4 rounded-xl text-left">
          Workout History
        </button>

        <button className="w-full bg-[#2A2A2A] p-4 rounded-xl text-left">
          Saved Workouts
        </button>

        <button className="w-full bg-[#2A2A2A] p-4 rounded-xl text-left text-red-400">
          Logout
        </button>
      </div>
    </div>
  );
}