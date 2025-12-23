export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white p-5">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-yellow-400">Track your daily progress</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#2A2A2A] p-4 rounded-xl">
          <h3 className="text-yellow-400 font-semibold">Calories</h3>
          <p className="text-3xl font-bold">450</p>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-xl">
          <h3 className="text-yellow-400 font-semibold">Steps</h3>
          <p className="text-3xl font-bold">7,820</p>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-xl">
          <h3 className="text-yellow-400 font-semibold">Workout</h3>
          <p className="text-3xl font-bold">45 min</p>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-xl">
          <h3 className="text-yellow-400 font-semibold">Heart Rate</h3>
          <p className="text-3xl font-bold">103 bpm</p>
        </div>
      </div>

      {/* Daily Tip */}
      <div className="bg-[#2A2A2A] p-5 rounded-xl">
        <h2 className="text-yellow-400 font-semibold mb-2">Daily Tip</h2>
        <p className="opacity-80">
          Consistency beats intensity — show up every day and watch the results compound.
        </p>
      </div>
    </div>
  );
}