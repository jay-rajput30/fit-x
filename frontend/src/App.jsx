import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exercise from "./pages/Exercise";
import Food from "./pages/Food";
import Goal from "./pages/Goal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/food" element={<Food />} />
        <Route path="/goal" element={<Goal />} />
      </Routes>
    </div>
  );
}

export default App;
