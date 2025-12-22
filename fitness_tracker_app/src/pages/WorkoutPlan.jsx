import Navbar from "../components/Navbar";

export default function WorkoutPlan() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Workout Plan</h1>
        <p className="text-gray-700 mb-4">
          Your personalized workout plan will appear here.
        </p>
        {/* Later: Add exercises, sets/reps, or videos */}
      </div>
    </div>
  );
}