import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo ecuela.svg";

const Navbar = () => {
  const location = useLocation();

  const seleccionado =
    "max-lg:border-b max-lg:py-2 relative lg:after:absolute lg:after:bg-indigo-900 lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:after:mb-0";
  const noSeleccionado =
    "max-lg:border-b max-lg:py-1 relative lg:hover:after:absolute lg:after:bg-indigo-900 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:after:mb-0";
  
  const navigate = useNavigate()

  return (
    <header className="font-[sans-serif] min-h-[60px] tracking-wide relative z-50">
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

        {/* <div className="flex items-center max-sm:ml-auto">
          <ul className="flex space-x-4">
            <li className="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                className="cursor-pointer fill-white"
                viewBox="0 0 512 512"
              >
                <path
                  d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                  data-original="#000000"
                />
              </svg>
            </li>
            <li className="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="cursor-pointer fill-white inline-block"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  0
                </span>
              </span>
            </li>
          </ul>

          <button id="toggleOpen" className="lg:hidden ml-6">
            <svg
              className="w-7 h-7"
              fill="#fff"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
