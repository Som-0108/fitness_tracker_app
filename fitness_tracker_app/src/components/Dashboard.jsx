export default function Dashboard({ workouts = [], goal }) {
  const totalCalories = workouts.reduce(
    (sum, w) => sum + (w.calories || 0),
    0
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Dashboard</h2>
      <p>Total Workouts: {workouts.length}</p>
      <p>Total Calories Burned: {totalCalories}</p>

      {goal && (
        <p className="mt-2">
          Goal: {goal} calories {totalCalories >= goal ? "✅" : "❌"}
        </p>
      )}
    </div>
  );
}
function logout() {
  localStorage.removeItem("isAuthenticated");
  window.location.href = "/signin";
}
<button
  onClick={logout}
  className="text-sm text-red-500 underline mt-2"
>
  Logout
</button>