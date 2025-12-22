import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <p>Your profile information will appear here.</p>
        {/* Later: Add edit profile form, settings, etc. */}
      </div>
    </div>
  );
}