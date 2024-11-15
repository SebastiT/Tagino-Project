import React, { useEffect, useState } from "react";
import axios from "axios";

import imgColegio1 from "../../assets/colegio1.jpg";
import imgColegio2 from "../../assets/colegio2.jpg";
import logo from "../../assets/logo ecuela.svg";

const Inicio = () => {
  return (
    <div className="flex p-4 min-h-screen-navbar ">
      <div className="w-[40%] flex items-center min-h-screen-navbar">
        <h1 className="font-sans font-black text-7xl ml-10 text-gray-700">
          ¡Bienvenido al Sistema de Información Saavedra!
        </h1>
      </div>
      <div className="w-[60%] relative">
        <img
          src={logo}
          className="absolute w-[300px] left-[80px] drop-shadow-lg"
          alt=""
        />
        <div className=" absolute w-[350px] h-[450px] bg-blue-800 left-[50%] top-[57px] shadow-md drop-shadow-xl"></div>
        <img
          src={imgColegio1}
          className="max-w-[350px] absolute left-[45%] shadow-lg drop-shadow-lg"
          alt=""
        />
        <div className="absolute  w-[450px] h-[250px] bg-amber-100 left-[12%] top-[395px] shadow-md drop-shadow-lg"></div>
        <img
          src={imgColegio2}
          className="max-w-[450px] absolute left-[17%] top-[350px] shadow-md drop-shadow-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Inicio;
