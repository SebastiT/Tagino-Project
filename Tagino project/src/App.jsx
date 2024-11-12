
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./Components/Login/Login"
import Inicio from "./Components/Inicio/Inicio"
import Navbar from "./Components/Navbar/Navbar";
import Notas from "./Components/Notas/Notas";

function App() {

  const location = useLocation()
  

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/notas" element={<Notas />} />
      </Routes>
    </>
  );
}

export default App;
