import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Age() {
  const [age, setAge] = useState(25);
  const navigate = useNavigate();

  function next() {
    localStorage.setItem("age", age);
    navigate("/weight");
  }

  return (
    <div className="min-h-screen bg-dark text-white p-6 text-center">
      <h2 className="text-xl font-bold mb-6">How old are you?</h2>

      <input
        type="range"
        min="10"
        max="80"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full"
      />

      <p className="text-3xl font-bold mt-4">{age}</p>

      <button
        onClick={next}
        className="mt-6 bg-primary text-black w-full py-3 rounded"
      >
        Next →
      </button>
    </div>
  );
}