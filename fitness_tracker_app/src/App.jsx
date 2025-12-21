import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Intro from "./pages/Intro";
import SignIn from "./pages/SignIn";
import Gender from "./pages/Gender";
import Age from "./pages/Age";
import Weight from "./pages/Weight";
import Home from "./pages/Home";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Intro />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/age" element={<Age />} />
        <Route path="/weight" element={<Weight />} />

        {/* Protected route */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;