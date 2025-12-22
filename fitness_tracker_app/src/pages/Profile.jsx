import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Profile</h1>
        <p className="text-lg text-gray-700">Your profile information will appear here.</p>
        {/* Later: Add edit profile form, settings, etc. */}
      </div>
    </div>
  );
}