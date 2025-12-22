import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">Dashboard</h1>
        <p className="text-lg text-gray-700">
          Welcome to your fitness app! Navigate to Workout Plan or Profile from the navbar.
        </p>
      </div>
    </div>
  );
}