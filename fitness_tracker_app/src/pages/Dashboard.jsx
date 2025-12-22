import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-screen">
      <Navbar />

      <div className="p-6 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-6 text-purple-700">
          Dashboard
        </h1>
        <p className="mb-6 text-lg text-gray-700 text-center max-w-md">
          Welcome to your fitness app! Navigate to your Workout Plan or Profile using the buttons below.
        </p>

        <div className="flex gap-4">
          <button
            className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
            onClick={() => navigate("/workout-plan")}
          >
            Workout Plan
          </button>
          <button
            className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition"
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
}