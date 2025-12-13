import { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

function App() {
  // This is our "notebook" for workouts
  const [workouts, setWorkouts] = useState([]);

  // Function to add a workout
  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="App">
      <h1>Fitness Tracker 💪</h1>
      <WorkoutForm onAddWorkout={addWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default App;