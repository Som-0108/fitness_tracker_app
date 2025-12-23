import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Onboarding / Welcome Screens
import Welcome from "./components/Welcome.jsx";
import Gender from "./components/Gender.jsx";
import Age from "./components/Age.jsx";
import Weight from "./components/Weight.jsx";

// Authentication
import SignIn from "./components/SignIn.jsx";

// Main App Screens
import Dashboard from "./components/Dashboard.jsx";
import Profile from "./components/Profile.jsx";
import WorkoutPlan from "./components/WorkoutPlan.jsx";

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