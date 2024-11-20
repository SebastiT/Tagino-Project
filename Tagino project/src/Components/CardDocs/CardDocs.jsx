import { Document, Page } from "react-pdf";
import { useState } from "react";

import pdfile from "../../assets/notasEjemplo.pdf";
import { useNavigate } from "react-router-dom";

const CardDocs = ({ id, type, date, url }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  const navigate = useNavigate();

  return (
    <div
      className="w-[300px] h-[400px] border border-gray-300 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => {
        navigate(`/ver-documento/${id}`);
      }}
    >
      {/* Sección del PDF (2/3 de la tarjeta) */}
      <div className="h-2/3 flex justify-center bg-gray-100 overflow-hidden">
        <Document file={url}>
          <Page
            pageNumber={1}
            width={300}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {/* Sección de descripción (1/3 de la tarjeta) */}
      <div className="h-1/3 bg-customBlue p-4 flex flex-col justify-center">
        <p className="text-sm font-semibold text-amber-100">
          Tipo de documento: {type}
        </p>
        <p className="text-xs text-amber-100">Fecha de documento: {date}</p>
      </div>
    </div>
  );
};

export default CardDocs;
