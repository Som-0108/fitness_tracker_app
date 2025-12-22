import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Gender from "./pages/Gender";
import Age from "./pages/Age";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/age" element={<Age />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;