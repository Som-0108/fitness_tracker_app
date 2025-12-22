import Navbar from "../components/Navbar";

export default function WorkoutPlan() {
  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Workout Plan</h1>
        <p>Your personalized workout plan will appear here.</p>
        {/* Later: Add exercises, sets/reps, or videos */}
      </div>
    </div>
  );
}