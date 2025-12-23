export default function WorkoutPlan() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white p-5">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Hello Julius!</h1>
        <p className="text-yellow-400 font-semibold">Good Morning</p>
      </div>

      {/* Today’s Workout */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Today's Workout Plan</h2>
        <div className="w-full h-40 bg-black bg-opacity-40 rounded-xl overflow-hidden">
          <img
            src="/images/workout1.jpg"
            className="w-full h-full object-cover opacity-70"
            alt=""
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Workout Categories</h2>
        <button className="text-yellow-400 text-sm">See All</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#2a2a2a] rounded-xl p-4">
          <h3 className="text-yellow-400 font-bold">Beginner</h3>
          <p className="text-sm opacity-80">Basics of Training</p>
        </div>

        <div className="bg-[#2a2a2a] rounded-xl p-4">
          <h3 className="text-yellow-400 font-bold">New Workouts</h3>
          <p className="text-sm opacity-80">Try something new</p>
        </div>
      </div>
    </div>
  );
}