import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
