import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts }) {
  if (workouts.length === 0) return <p>No workouts yet</p>;

  return (
    <ul>
      {workouts.map((workout) => (
        <WorkoutItem key={workout.id} workout={workout} />
      ))}
    </ul>
  );
}

export default WorkoutList;