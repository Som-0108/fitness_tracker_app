function WorkoutItem({ workout }) {
  return (
    <li>
      <strong>{workout.name}</strong> — {workout.duration} min — 🔥{" "}
      {workout.calories} cal ({workout.date})
    </li>
  );
}

export default WorkoutItem;