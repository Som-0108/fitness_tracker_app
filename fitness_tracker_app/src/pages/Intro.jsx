import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col justify-end p-6">
      <h1 className="text-3xl font-bold mb-2">FITNESS APP</h1>
      <p className="text-gray-400 mb-6">Don’t quit, stay fit</p>

      <button
        onClick={() => navigate("/signin")}
        className="bg-primary text-black py-3 rounded font-semibold"
      >
        Start Now →
      </button>
    </div>
  );
}