import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function WorkoutChart({ workouts }) {
  // Group workouts by date
  const workoutsByDate = {};

  workouts.forEach((workout) => {
    if (!workoutsByDate[workout.date]) {
      workoutsByDate[workout.date] = 0;
    }
    workoutsByDate[workout.date] += workout.duration;
  });

  const data = {
    labels: Object.keys(workoutsByDate),
    datasets: [
      {
        label: "Workout Duration (minutes)",
        data: Object.values(workoutsByDate),
      },
    ],
  };

  return (
    <div>
      <h2>Workout Progress 📊</h2>
      <Bar data={data} />
    </div>
  );
}

export default WorkoutChart;