import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signin" element={<SignIn />} />

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

export default App; // 🔴 THIS LINE MUST EXIST