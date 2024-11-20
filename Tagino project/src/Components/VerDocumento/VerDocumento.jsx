import React, { useEffect } from "react";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import pdfile from "../../assets/notasEjemplo.pdf";
import { RiH1 } from "react-icons/ri";

const VerDocumento = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const { id } = useParams();
  const [datos, setDatos] = useState();

  function onDocumentLoadSuccess(a) {
    setNumPages(a._transport._numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const obtenerDatosDocumento = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/documents/${id}`);
    setDatos(response.data);
  };

  const navigate = useNavigate()

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este documento?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8000/document/${id}`);
      alert("Documento eliminado correctamente.");
      navigate("/inicio"); // Redirigir al inicio tras eliminar
    } catch (error) {
      console.error("Error al eliminar el documento:", error);
      alert("Hubo un problema al eliminar el documento.");
    }
  };

  useEffect(() => {
    obtenerDatosDocumento();
  }, []);

  console.log(datos);
  return (
    <>
      {datos ? (
        <div className="p-5 flex gap-36 justify-center">
          <div className="w-[400px] h-[500px]">
            <div className="min-h-[400px] border">
              <Document file={datos.url}>
                <Page
                  pageNumber={pageNumber}
                  height={500}
                  
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  onLoadSuccess={onDocumentLoadSuccess}
                />
              </Document>
            </div>
            <div>
              <p>
                Pagina {pageNumber || (numPages ? 1 : "--")} de{" "}
                {numPages || "--"}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:bg-blue-300"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:bg-blue-300"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <label className="text-sm font-medium text-gray-700 mb-1 ">
              Tipo de Documento:
            </label>
            <h4>{`${datos.type}`}</h4>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Grado y Seccion:
            </label>
            <div className="flex">
              <h4>{`${datos.grade}º ${datos.section}`}</h4>
            </div>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Fecha de Documento:
            </label>
            <h4>{datos.date.slice(0, 7)}</h4>
            <hr />
            <button
              className=" self-center flex items-center gap-2 px-4 py-2 bg-customBlue text-white rounded-full hover:bg-indigo-700 transition-colors"
              onClick={() => {
                window.open(datos.url, "_blank");
              }}
            >
              <FaFileDownload />
              Descargar Documento
            </button>
            <button onClick={handleDelete} className=" self-center flex items-center gap-2 px-4 py-2 bg-red-900 text-white rounded-full hover:bg-red-600 transition-colors">
              <MdDeleteForever />
              Eliminar Documento
            </button>
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </>
  );
};

export default VerDocumento;
