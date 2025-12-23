import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components from ../components
import Welcome from "../components/Welcome";
import SignIn from "../components/SignIn";
import Profile from "../components/Profile";
import WorkoutPlan from "../components/WorkoutPlan";
import Dashboard from "../components/Dashboard";
import Gender from "../components/Gender";
import Age from "../components/Age";
import Weight from "../components/Weight";

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