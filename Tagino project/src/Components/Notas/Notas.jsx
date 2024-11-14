import React from 'react'
import CardDocs from '../CardDocs/CardDocs'
import { Document, Page } from 'react-pdf'
import pdfile from "../../assets/CARTA DE EXPOSICION DE MOTIVOS PARA LA SOLICITUD DE ASILO O PROTECCIÓN INTERNACIONAL.pdf";


const Notas = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        <CardDocs />
        <CardDocs />
        <CardDocs />
        <CardDocs />
        <CardDocs />
        <CardDocs />
        <CardDocs />
        <CardDocs />

        {/* <Document className="border-lime-500 border" file={pdfile}>
        <Page
        pageNumber={1}
        width="500"
        renderTextLayer={false}
        renderAnnotationLayer={false}
        />
        </Document> */}
      </div>
    </>
  );
}

export default Notas
