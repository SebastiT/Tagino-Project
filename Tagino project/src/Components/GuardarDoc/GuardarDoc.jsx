import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Document, Page } from "react-pdf";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import { FaFileUpload } from "react-icons/fa";



const GuardarDoc = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [pdfFile, setPdfFile] = useState(null);

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(a) {
    setNumPages(a._transport._numPages);
  }

  const onChange = (e) => {
    setPdfFile(e.target.files[0]);
    console.log(pdfFile);
  };

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
          <Document file={pdfFile}>
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
      <form className="">
        <div className="flex flex-col items-start gap-3">
          <label className="text-sm font-medium text-gray-700 mb-1 ">
            Tipo de Documento:
          </label>
          <select
            name=""
            id=""
            className="border border-gray-300 rounded-lg p-2"
            required
          >
            <option disabled selected></option>
            <option value="">Notas</option>
            <option value="">Certificados</option>
            <option value="">Registros Academicos</option>
            <option value="">Horarios</option>
            <option value="">Documentos institucionales</option>
          </select>
          <label className="text-sm font-medium text-gray-700 mb-1">
            Grado y Seccion:
          </label>
          <div className="flex">
            <select
              name=""
              id=""
              className="border border-gray-300 rounded-l-lg p-2"
              required
            >
              <option disabled selected></option>
              <option value="">1º</option>
              <option value="">2º</option>
              <option value="">3º</option>
              <option value="">4º</option>
              <option value="">5º</option>
            </select>
            <select
              name=""
              id=""
              className="border border-gray-300 rounded-r-lg p-2"
              required
            >
              <option disabled selected></option>
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
              <option value="">D</option>
              <option value="">E</option>
            </select>
          </div>
          <label className="text-sm font-medium text-gray-700 mb-1">
            Fecha de Documento:
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/yyyy" // Formato de solo mes y año
            showMonthYearPicker // Muestra solo el selector de mes y año
            placeholderText="MM/AAAA"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-" // Clases para estilo
            required
          />
          <label className="text-sm font-medium text-gray-700 mb-1">
            Selecciona Documento:
          </label>
          <input
            type="file"
            onChange={onChange}
            className=" h-11 file:h-full file:border file:rounded-l-lg dark:rounded-lg dark:border cursor-pointer"
            required
          />
          <hr />
          <button className=" self-center flex items-center gap-2 px-4 py-2 bg-customBlue text-white rounded-full hover:bg-indigo-700 transition-colors">
            <FaFileUpload />
            Guardar Documento
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuardarDoc;
