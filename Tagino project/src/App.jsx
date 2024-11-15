import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./Components/Login/Login";
import Inicio from "./Components/Inicio/Inicio";
import Navbar from "./Components/Navbar/Navbar";
import Notas from "./Components/Notas/Notas";
import Cretificados from "./Components/Certificados/Cretificados";
import DocInstitucionales from "./Components/DocInstitucionales/DocInstitucionales";
import GuardarDoc from "./Components/GuardarDoc/GuardarDoc";
import Horarios from "./Components/Horarios/Horarios";
import RegistrosAcad from "./Components/RegistrosAcad/RegistrosAcad";
import VerDocumento from "./Components/VerDocumento/VerDocumento";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {
  const location = useLocation();

  return (
    <div className="bg-gray-50 h-[100vh]">
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/certificados" element={<Cretificados />} />
        <Route
          path="/documentos-institucionales"
          element={<DocInstitucionales />}
        />
        <Route path="/guardar-documento" element={<GuardarDoc />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/registros-academicos" element={<RegistrosAcad />} />
        <Route path="/subir-documento" element={<GuardarDoc />} />
        <Route path="/ver-documento" element={<VerDocumento />} />
      </Routes>
    </div>
  );
}

export default App;
