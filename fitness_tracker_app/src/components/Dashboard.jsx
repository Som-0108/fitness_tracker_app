import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p>Welcome to your fitness app! Here you can navigate to your Workout Plan or Profile.</p>
      </div>
    </div>
  );
}