import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts, onDeleteWorkout }) {
  if (workouts.length === 0) return <p>No workouts yet</p>;

  return (
    <ul>
      {workouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          workout={workout}
          onDeleteWorkout={onDeleteWorkout}
        />
      ))}
    </ul>
  );
}

export default WorkoutList;