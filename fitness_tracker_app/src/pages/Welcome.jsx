import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-between">
      {/* Welcome Back! */}
      <div
        className="h-[75vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/welcome_bg.jpg')", // add an image later
        }}
      ></div>

      {/* Bottom Section */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">FITNESS APP</h1>
        <p className="text-gray-300 mt-1">DON’T QUIT, STAY FIT</p>

        <button
          onClick={() => navigate("/signin")}
          className="w-full bg-[#F9B233] text-black py-3 rounded-lg mt-6 font-semibold"
        >
          START NOW
        </button>
      </div>
    </div>
  );
}