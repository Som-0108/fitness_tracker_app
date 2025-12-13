import { useState, useEffect } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

function App() {
  // Load workouts from localStorage if available
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workouts");
    return saved ? JSON.parse(saved) : [];
  });

  // Save workouts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  // Add new workout
  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  // Delete a workout by ID
  const deleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter((w) => w.id !== id);
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className="App">
      <h1>Fitness Tracker 💪</h1>
      <WorkoutForm onAddWorkout={addWorkout} />
      <WorkoutList workouts={workouts} onDeleteWorkout={deleteWorkout} />
    </div>
  );
}

export default App;