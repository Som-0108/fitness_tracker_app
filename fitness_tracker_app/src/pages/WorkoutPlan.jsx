import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function WorkoutPlan() {
  return (
    <div className="min-h-screen bg-[#111] text-white p-5 pb-24">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Hello Julius!</h1>
        <p className="text-yellow-400 text-lg font-medium">Good Morning</p>
      </div>

      {/* Today's Workout */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Today's Workout Plan</h2>

        <div className="rounded-xl overflow-hidden relative">
          <img
            src="/images/workout1.jpg"
            className="w-full h-44 object-cover opacity-90"
            alt="Workout"
          />

          <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 px-3 py-1 rounded-lg text-sm">
            10 min warm up
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Workout Categories</h2>
        <button className="text-yellow-400">See All</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Card 1 */}
        <Link to="/dashboard">
          <div className="bg-[#1F1F1F] rounded-xl p-3">
            <img
              src="/images/beginner.jpg"
              className="rounded-lg h-28 w-full object-cover mb-2"
            />
            <h3 className="text-yellow-400 font-bold text-lg">Beginner</h3>
            <p className="text-sm opacity-80">Basics of Training</p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/dashboard">
          <div className="bg-[#1F1F1F] rounded-xl p-3">
            <img
              src="/images/newworkout.jpg"
              className="rounded-lg h-28 w-full object-cover mb-2"
            />
            <h3 className="text-yellow-400 font-bold text-lg">New Workouts</h3>
            <p className="text-sm opacity-80">Try something new</p>
          </div>
        </Link>
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