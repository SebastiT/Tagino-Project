import { Document, Page } from "react-pdf";
import { useState } from "react";

import pdfile from "../../assets/CARTA DE EXPOSICION DE MOTIVOS PARA LA SOLICITUD DE ASILO O PROTECCIÓN INTERNACIONAL.pdf";

const CardDocs = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  return (
    <div className="w-[300px] h-[400px] border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      {/* Sección del PDF (2/3 de la tarjeta) */}
      <div className="h-2/3 flex justify-center bg-gray-100 overflow-hidden">
        <Document file={pdfile}>
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
        <p className="text-sm font-semibold text-amber-100">documentType</p>
        <p className="text-xs text-amber-100">date</p>
      </div>
    </div>
    // <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <div className="max-h-[300px]">
    //     <Document file={pdfile} onLoadSuccess={onDocumentLoadSuccess}>
    //       <Page
    //         height={350}
    //         pageNumber={pageNumber}
    //         renderTextLayer={false}
    //         renderAnnotationLayer={false}
    //       />
    //     </Document>
    //   </div>
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    //     <p className="text-gray-700 text-base">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    //       quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    //       nihil.
    //     </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #photography
    //     </span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #travel
    //     </span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #winter
    //     </span>
    //   </div>
    // </div>
    // <div className="w-[320px] h-[500px] border border-gray-300 overflow-hidden flex justify-center items-center bg-white shadow-lg">
    //   <Document file={pdfile}>
    //     <Page
    //       pageNumber={1}
    //       width={300}
    //       renderTextLayer={false}
    //       renderAnnotationLayer={false}
    //     />
    //   </Document>
    // </div>
  );
};

export default CardDocs;
