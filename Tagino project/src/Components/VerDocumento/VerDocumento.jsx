import React from "react";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


import pdfile from "../../assets/notasEjemplo.pdf";

const VerDocumento = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [pdfFile, setPdfFile] = useState(null);

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

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

  return (
    <div className="p-5 flex gap-36 justify-center">
      <div className="w-[400px] h-[500px]">
        <div className="min-h-[400px] border">
          <Document file={pdfile}>
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
            Pagina {pageNumber || (numPages ? 1 : "--")} de {numPages || "--"}
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
        <h4>Notas</h4>
        <label className="text-sm font-medium text-gray-700 mb-1">
          Grado y Seccion:
        </label>
        <div className="flex">
          <h4>5º C</h4>
        </div>
        <label className="text-sm font-medium text-gray-700 mb-1">
          Fecha de Documento:
        </label>
        <h4>01/2001</h4>
        <hr />
        <button className=" self-center flex items-center gap-2 px-4 py-2 bg-customBlue text-white rounded-full hover:bg-indigo-700 transition-colors">
          <FaFileDownload />
          Descargar Documento
        </button>
        <button className=" self-center flex items-center gap-2 px-4 py-2 bg-customBlue text-white rounded-full hover:bg-indigo-700 transition-colors">
          <MdDeleteForever />
          Eliminar Documento
        </button>
      </div>
    </div>
  );
};

export default VerDocumento;
