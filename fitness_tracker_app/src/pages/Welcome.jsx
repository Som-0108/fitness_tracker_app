import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <h1 className="text-4xl font-extrabold mb-6 text-purple-700">Welcome</h1>
      <p className="text-lg mb-6 text-gray-700 text-center max-w-md">
        Let’s get you started on your fitness journey!
      </p>
      <button
        onClick={() => navigate("/signin")}
        className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Get Started
      </button>
    </div>
  );
}