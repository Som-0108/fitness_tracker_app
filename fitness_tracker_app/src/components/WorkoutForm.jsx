import { useEffect, useState } from "react";

export default function Dashboard({ goal, totalCalories }) {
  const [progress, setProgress] = useState(0);
  const [barColor, setBarColor] = useState("bg-green-500");

  // Animate progress whenever totalCalories or goal changes
  useEffect(() => {
    const newProgress = goal > 0 ? Math.min((totalCalories / goal) * 100, 100) : 0;
    setProgress(newProgress);

    // Update bar color based on progress
    if (newProgress <= 50) setBarColor("bg-green-500");
    else if (newProgress <= 80) setBarColor("bg-yellow-400");
    else setBarColor("bg-red-500");
  }, [totalCalories, goal]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-xl mb-2">Dashboard</h2>
      <p>Calorie Goal: {goal} cal</p>
      <p>Calories Burned: {totalCalories} cal</p>

      <div className="w-full bg-gray-200 h-4 rounded mt-2 overflow-hidden">
        <div
          className={`${barColor} h-4 rounded transition-all duration-700 ease-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm mt-1">{progress.toFixed(1)}% of goal completed</p>
    </div>
  );
}