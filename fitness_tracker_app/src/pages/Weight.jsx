import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWeight } from "react-icons/fa";

export default function Weight() {
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  function handleNext() {
    if (weight) navigate("/dashboard");
    else alert("Please enter your weight");
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200">
      <FaWeight className="text-6xl text-purple-700 mb-6 animate-bounce" />
      <h2 className="text-3xl font-bold mb-4 text-purple-700">Enter Your Weight</h2>
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="border p-3 mb-6 rounded-xl w-64 shadow-md outline-none focus:ring-2 focus:ring-purple-400" />
      <button onClick={handleNext} className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-105 transition">Continue</button>
    </div>
  );
}