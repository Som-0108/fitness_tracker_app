import { useState } from "react";

function WorkoutForm({ onAddWorkout }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a workout object
    const newWorkout = {
      id: Date.now(), // unique ID
      name,
      duration: Number(duration),
      calories: Number(calories) || 0,
      date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
    };

    // Send workout to App.jsx
    onAddWorkout(newWorkout);

    // Clear form
    setName("");
    setDuration("");
    setCalories("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Workout name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calories burned (optional)"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;