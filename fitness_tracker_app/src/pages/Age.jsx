import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBirthdayCake } from "react-icons/fa";

export default function Age() {
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  function handleNext() {
    if (age) navigate("/weight");
    else alert("Please enter your age");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-green-200 via-yellow-200 to-orange-200">
      <FaBirthdayCake className="text-6xl text-green-700 mb-6 animate-bounce" />
      <h2 className="text-3xl font-bold mb-4 text-green-700">Enter Your Age</h2>
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="border p-3 mb-6 rounded-xl w-64 shadow-md outline-none focus:ring-2 focus:ring-green-400" />
      <button onClick={handleNext} className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-105 transition">Continue</button>
    </div>
  );
}