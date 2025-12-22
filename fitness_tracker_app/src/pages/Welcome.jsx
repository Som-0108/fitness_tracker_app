import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p className="mb-6">Let’s get you started</p>

        <button
          onClick={() => navigate("/signin")}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}