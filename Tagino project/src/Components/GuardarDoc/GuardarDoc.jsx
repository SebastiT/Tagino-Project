import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Document, Page } from "react-pdf";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import { FaFileUpload } from "react-icons/fa";
import axios from "axios";



const GuardarDoc = () => {

  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const [info, setInfo] = useState({
    date: null,
    grade: "",
    section: "",
    type: "",
    file: null
  })

  // const [datos,setDatos] = useState(null)

  function onDocumentLoadSuccess(a) {
    setNumPages(a._transport._numPages);
  }

  const onChange = (e) => {
    setInfo({...info, [e.target.name]:e.target.files[0]});
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

  const onChangeSelect = (e) => {
    setInfo({...info,[e.target.name]: e.target.value})
  }
  
  // const obtenerDatos = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:8000/users");
  //     setDatos(response.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  // }

  
  // useEffect(() => {
  //   obtenerDatos()
  // },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("date", info.date.toISOString().slice(0, 7));
    formData.append("type", info.type)
    formData.append("grade", info.grade); 
    formData.append("section", info.section);
    formData.append("file", info.file);
    console.log([...formData.entries()]);

    try {
      const response = await axios.post("http://127.0.0.1:8000/documents", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response:", response.data);

    } catch (error) {
       console.error("Error:", error);
    }
    
  }

  return (
    <div className="p-5 flex gap-36 justify-center">
      <div className="w-[400px] h-[500px]">
        <div className="min-h-[400px] border">
          <Document file={info.file}>
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
              className="bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              Anterior
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              className="bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start gap-3">
          <label className="text-sm font-medium text-gray-700 mb-1 ">
            Tipo de Documento:
          </label>
          <select
            name="type"
            onChange={onChangeSelect}
            value={info.type}
            className="border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="" disabled></option>
            <option value="Notas">Notas</option>
            <option value="Certificados">Certificados</option>
            <option value="Registros Academicos">Registros Academicos</option>
            <option value="Horarios">Horarios</option>
            <option value="Documentos institucionales">
              Documentos institucionales
            </option>
          </select>
          <label className="text-sm font-medium text-gray-700 mb-1">
            Grado y Seccion:
          </label>
          <div className="flex">
            <select
              name="grade"
              onChange={onChangeSelect}
              value={info.grade}
              className="border border-gray-300 rounded-l-lg p-2"
              required
            >
              <option value="" disabled></option>
              <option value="1">1º</option>
              <option value="2">2º</option>
              <option value="3">3º</option>
              <option value="4">4º</option>
              <option value="5">5º</option>
            </select>
            <select
              name="section"
              onChange={onChangeSelect}
              value={info.section}
              className="border border-gray-300 rounded-r-lg p-2"
              required
            >
              <option value="" disabled></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
          <label className="text-sm font-medium text-gray-700 mb-1">
            Fecha de Documento:
          </label>
          <DatePicker
            selected={info.date}
            name="date"
            onChange={(date) => setInfo({ ...info, date: date })}
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
            name="file"
            onChange={onChange}
            className=" h-11 file:h-full file:border file:rounded-l-lg dark:rounded-lg dark:border cursor-pointer"
            required
          />
          <hr />
          <button
            className=" self-center flex items-center gap-2 px-4 py-2 bg-customBlue text-white rounded-full hover:bg-indigo-700 transition-colors"
            type="submit"
          >
            <FaFileUpload />
            Guardar Documento
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuardarDoc;
