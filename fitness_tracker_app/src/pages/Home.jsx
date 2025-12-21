import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";
import Dashboard from "../components/Dashboard";
import GoalForm from "../components/GoalForm";

export default function Home({ workouts, setWorkouts, goal, setGoal }) {
  return (
    <div className="space-y-6">
      <Dashboard workouts={workouts} goal={goal} />
      <GoalForm setGoal={setGoal} />
      <WorkoutForm setWorkouts={setWorkouts} />
      <WorkoutList workouts={workouts} setWorkouts={setWorkouts} />
    </div>
  );
}   