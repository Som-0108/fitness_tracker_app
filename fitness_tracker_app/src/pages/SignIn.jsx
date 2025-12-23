import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      navigate("/gender");
    }
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white p-6 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8">Welcome Back, Micheal!</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-transparent border-b border-gray-600 text-white focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-transparent border-b border-gray-600 text-white focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-right">
          <button type="button" className="text-gray-400 text-sm">
            Forgot Password?
          </button>
        </div>

        <button className="w-full bg-[#F9B233] text-black py-3 rounded-lg font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}