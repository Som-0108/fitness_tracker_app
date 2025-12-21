
export default function History({ workouts }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Workout History</h2>
      {workouts.length === 0 && <p>No workouts logged.</p>}

      {workouts.map((w) => (
        <div key={w.id} className="bg-white p-3 mb-2 rounded shadow">
          <p><strong>{w.exercise}</strong></p>
          <p>{w.date}</p>
          <p>{w.calories} calories</p>
        </div>
      ))}
    </div>
  );
}