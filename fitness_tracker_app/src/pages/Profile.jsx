import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 min-h-screen">
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Profile</h1>
        <p className="text-gray-700 mb-4">
          Your profile information will appear here.
        </p>
        {/* Later: Add edit profile form, settings, etc. */}
      </div>
    </div>
  );
}