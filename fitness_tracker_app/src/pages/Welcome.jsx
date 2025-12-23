import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-between">
      {/* Top Section - Image or Background */}
      <div
        className="h-[75vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/welcome_bg.jpg')", // Add an image here
        }}
      ></div>

      {/* Bottom Section - Text and Button */}
      <div className="p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Welcome!</h1>
        <p className="text-yellow-400 text-lg mb-6">Let's get started with your fitness journey</p>

        <button
          onClick={() => navigate("/signin")}
          className="w-full bg-[#F9B233] text-black py-3 rounded-lg font-semibold"
        >
          START NOW
        </button>
      </div>
    </div>
  );
}