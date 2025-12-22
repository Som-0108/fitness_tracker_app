import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) navigate("/gender");
    else alert("Please enter email and password");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-200 via-yellow-200 to-orange-200">
      <form className="bg-white p-8 rounded-2xl shadow-2xl w-80 flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Sign In</h2>
        <div className="flex items-center border rounded-lg p-2 gap-2">
          <FaEnvelope className="text-gray-400" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full outline-none" required />
        </div>
        <div className="flex items-center border rounded-lg p-2 gap-2">
          <FaLock className="text-gray-400" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full outline-none" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-3 rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-105 transition mt-4">
          Sign In
        </button>
      </form>
    </div>
  );
}