import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Profile from "./Profile";
import WorkoutPlan from "./WorkoutPlan";
import Gender from "./Gender";
import Age from "./Age";
import Weight from "./Weight";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/signin" element={<SignIn />} />

        {/* Onboarding */}
        <Route path="/" element={<Welcome />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/age" element={<Age />} />
        <Route path="/weight" element={<Weight />} />

        {/* Main App */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
      </Routes>
    </Router>
  );
}

export default App;