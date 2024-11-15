import React from 'react'
import CardDocs from '../CardDocs/CardDocs'
import { Document, Page } from 'react-pdf'


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

      </div>
    </>
  );
}

export default Notas
