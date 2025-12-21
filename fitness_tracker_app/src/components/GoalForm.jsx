import { useState, useEffect } from "react";

export default function GoalForm({ setGoal }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [successAnim, setSuccessAnim] = useState(false); // For green border animation

  function submit(e) {
    e.preventDefault();
    const num = Number(value);

    // Validation
    if (!value) {
      setError("Goal cannot be empty");
      setSuccess("");
      return;
    }

    if (num <= 0) {
      setError("Goal must be a positive number");
      setSuccess("");
      return;
    }

    // Set goal
    setGoal(num);
    setValue("");
    setError("");
    setSuccess(`Goal set to ${num} calories!`);
    setSuccessAnim(true); // Trigger animation

    // Clear success message & animation after 3 seconds
    setTimeout(() => {
      setSuccess("");
      setSuccessAnim(false);
    }, 3000);
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white p-4 rounded shadow w-full max-w-sm mx-auto"
    >
      <h3 className="font-bold mb-2 text-lg">Set Calorie Goal</h3>

      <input
        type="number"
        placeholder="Enter calories"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min="1"
        step="1"
        className={`border p-2 w-full mb-2 rounded focus:outline-none focus:ring transition-colors duration-300
          ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"}
          ${successAnim ? "border-green-500 focus:ring-green-300" : ""}`}
      />

      {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
      {success && <p className="text-green-500 mb-2 text-sm">{success}</p>}

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800 transition-colors"
      >
        Save Goal
      </button>
    </form>
  );
}