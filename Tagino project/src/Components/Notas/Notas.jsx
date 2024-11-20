import React, { useEffect, useState } from "react";
import CardDocs from "../CardDocs/CardDocs";
import axios from "axios";

const Notas = () => {
  const [documentos, setDocumentos] = useState();
  const [cargando, setCargando] = useState(true);

  const obtenerDocumentos = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/documents/type/Notas"
      );
      setDocumentos(response.data);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  useEffect(() => {
    obtenerDocumentos();
    console.log(documentos);
  }, []);

  return (
    <>
      {cargando ? (
        <div className="flex items-center justify-center h-[85vh]">
          <h1 className="text-center">Cargando...</h1>
        </div>
      ) : documentos ? (
        <div className="grid grid-cols-4 gap-4 p-4">
          {documentos.map((document) => {
            return (
              <CardDocs
                key={document.id}
                id={document.id}
                type={document.type}
                date={document.date}
                url={document.url}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[85vh]">
          <h1 className="text-center">No se encontraron documentos</h1>
        </div>
      )}
    </>
  );
};

export default Notas;
