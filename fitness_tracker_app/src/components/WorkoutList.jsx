import { useState } from "react";

export default function WorkoutList({ workouts, setWorkouts }) {
  const [removingId, setRemovingId] = useState(null); // Track the workout being removed

  function deleteWorkout(id) {
    const confirmed = window.confirm("Are you sure you want to delete this workout?");
    if (!confirmed) return;

    setRemovingId(id);

    // Wait for animation (300ms) then remove from state
    setTimeout(() => {
      setWorkouts(workouts.filter((w) => w.id !== id));
      setRemovingId(null);
    }, 300);
  }

  return (
    <div>
      <h3 className="font-bold mb-2 text-lg">Logged Workouts</h3>

      {workouts.length === 0 ? (
        <p className="text-gray-500">No workouts logged yet.</p>
      ) : (
        workouts.map((w) => (
          <div
            key={w.id}
            className={`bg-white p-3 mb-2 rounded shadow flex justify-between items-center transition-all duration-300 transform ${
              removingId === w.id
                ? "opacity-0 translate-x-20"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div>
              <p className="font-medium">{w.exercise}</p>
              <p className="text-gray-500 text-sm">{w.calories} cal</p>
            </div>
            <button
              onClick={() => deleteWorkout(w.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}