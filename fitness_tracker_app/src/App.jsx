import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import Gender from "./pages/Gender";
import Age from "./pages/Age";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/age" element={<Age />} />
        <Route path="/weight" element={<Weight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;