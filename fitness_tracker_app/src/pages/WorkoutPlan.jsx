import Navbar from "../components/Navbar";

export default function WorkoutPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Workout Plan</h1>
        <p className="text-lg text-gray-700">Your personalized workout plan will appear here.</p>
        {/* Later: Add exercises, sets/reps, or videos */}
      </div>
    </div>
  );
}