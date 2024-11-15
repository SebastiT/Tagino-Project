import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo ecuela.svg";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const seleccionado =
    "max-lg:border-b max-lg:py-2 relative lg:after:absolute lg:after:bg-indigo-900 lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:after:mb-0";
  const noSeleccionado =
    "max-lg:border-b max-lg:py-1 relative lg:hover:after:absolute lg:after:bg-indigo-900 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:after:mb-0";
  
  const navigate = useNavigate()

  return (
    <header className="font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between py-1 px-4 sm:px-10 bg-amber-100 lg:gap-y-4 gap-y-6 gap-x-4 ">
        <a href="javascript:void(0)">
          <img src={logo1} alt="logo" className="w-14" />
        </a>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:!flex lg:gap-x-5 max-lg:space-y-0 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 mb-0">
            <li
              className={
                location.pathname == "/inicio" ? seleccionado : noSeleccionado
              }
            >
              <a
                href=""
                className="text-indigo-900 block text-[18px] font-medium no-underline"
                onClick={() => navigate("/inicio")}
              >
                Inicio
              </a>
            </li>
            <li className="lg:border-r border-gray-400"></li>
            <li
              className={
                location.pathname == "/registros-academicos"
                  ? seleccionado
                  : noSeleccionado
              }
            >
              <a
                onClick={() => navigate("/registros-academicos")}
                href=""
                className="text-indigo-900 block text-[18px] font-medium no-underline"
              >
                Registros Academicos
              </a>
            </li>
            <li className="lg:border-r border-gray-400"></li>

            <li
              className={
                location.pathname == "/certificados"
                  ? seleccionado
                  : noSeleccionado
              }
            >
              <a
                href="javascript:void(0)"
                onClick={() => navigate("/certificados")}
                className="text-indigo-900 block text-[18px] font-medium no-underline"
              >
                Certificados
              </a>
            </li>
            <li className="lg:border-r border-gray-400"></li>

            <li
              className={
                location.pathname == "/notas" ? seleccionado : noSeleccionado
              }
            >
              <a
                onClick={() => navigate("/notas")}
                href="javascript:void(0)"
                className="text-indigo-900 block text-[18px] font-medium no-underline"
              >
                Notas
              </a>
            </li>
            <li className="lg:border-r border-gray-400"></li>

            <li
              className={
                location.pathname == "/horarios" ? seleccionado : noSeleccionado
              }
            >
              <a
                onClick={() => navigate("/horarios")}
                href="javascript:void(0)"
                className="text-indigo-900 block text-[18px] font-medium no-underline"
              >
                Horarios
              </a>
            </li>
            <li className="lg:border-r border-gray-400"></li>

            <li
              className={
                location.pathname == "/documentos-institucionales"
                  ? seleccionado
                  : noSeleccionado
              }
            >
              <a
                onClick={() => navigate("/documentos-institucionales")}
                href="javascript:void(0)"
                className="text-indigo-900 block text-[18px] font-medium no-underline"
              >
                Documentos institucionales
              </a>
            </li>
          </ul>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-customBlue text-white rounded-full hover:bg-indigo-700 transition-colors" onClick={()=>{navigate("/subir-documento")}}>
          <FaPlus />
          Subir Documento
        </button>
      </div>
    </header>
  );
};

export default Navbar;
