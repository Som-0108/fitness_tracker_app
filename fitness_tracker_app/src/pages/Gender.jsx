import { useNavigate } from "react-router-dom";

export default function Gender() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Select Gender</h2>

      <button onClick={() => navigate("/age")}>Male</button>
      <button onClick={() => navigate("/age")}>Female</button>
    </div>
  );
}