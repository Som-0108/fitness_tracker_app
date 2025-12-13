import { useState } from "react";

function App() {
  const [workouts, setWorkouts] = useState([]);

  return (
    <div>
      <h1>Fitness Tracker 💪</h1>
      <p>Total workouts: {workouts.length}</p>
    </div>
  );
}

export default App;