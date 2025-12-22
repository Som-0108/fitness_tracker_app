import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Weight() {
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  function handleNext() {
    if (weight) {
      navigate("/dashboard");
    } else {
      alert("Please enter your weight");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">Enter Your Weight</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 mb-6 rounded w-64"
      />
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Continue
      </button>
    </div>
  );
}