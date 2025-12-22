import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Age() {
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  function handleNext() {
    if (age) {
      navigate("/weight");
    } else {
      alert("Please enter your age");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Enter Your Age</h2>
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
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