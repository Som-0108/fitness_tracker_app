import { useNavigate } from "react-router-dom";
import { FaRunning } from "react-icons/fa";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200">
      <FaRunning className="text-6xl text-purple-700 mb-6 animate-bounce" />
      <h1 className="text-4xl font-extrabold mb-4 text-purple-700">Welcome</h1>
      <p className="text-lg mb-6 text-gray-700 text-center max-w-md">
        Let’s get you started on your fitness journey!
      </p>
      <button
        onClick={() => navigate("/signin")}
        className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-105 transition"
      >
        Get Started
      </button>
    </div>
  );
}