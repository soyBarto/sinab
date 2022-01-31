import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <section id="login">
        <body>
          <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
              <span className="font-medium">¡ATENCIÓN!</span> La contraseña que deberá digitar es la correspondiente al correo electrónico asignado por la Universidad.
            </div>
          </div>
          <div className="fondo shadow-md rounded-lg px-8 pt-7 pb-8 mb-4 flex flex-col">
            <a className="tituloLogin mb-5" href="">
              <div>
                <p className="titulo text-right py-3">Sistema nacional</p>
                <p className="titulo text-right">de bibliotecas</p>
              </div>
              <img title="Bibliotecas Universidad Nacional de Colombia" alt="Sistema Nacional de Bibliotecas Universidad Nacional de Colombia" src="https://bibliotecas.unal.edu.co/typo3conf/ext/bibliotecas_unal/Resources/Public/Bibliotecas/images/iconos/unNegativo.png" width="100" height="100" />
            </a>
            <div className="mb-4">
              <label className="block text-white text-grey-darker text-sm font-bold mb-2" for="username">
                Número de documento de identidad
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Documento de identidad" />
            </div>
            <div className="mb-1">
              <label className="block text-white text-grey-darker text-sm font-bold mb-2" for="password">
                Contraseña del correo de la UN
              </label>
              <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="***********" />
              <div className="p-0">
                <div className="dropdown inline-block relative">
                  <button className="bg-gray-200 text-gray-600 text-sm font-bold mb-2 py-1 px-4 rounded inline-flex">
                    <span className="block text-left mr-1">Sistema Nacional de Bibliotecas</span>
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-1 px-6 block whitespace-no-wrap" href="#">Sistema Nacional de Bibliotecas</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-8">
              <button className="campo-button bg-transparent hover:bg-white text-white hover:text-blue-900 border-white hover:border-transparent">
                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Ingresar</span>
              </button>
              <button className="campo-button bg-transparent hover:bg-white text-white hover:text-blue-900 border-white hover:border-transparent">
                <svg className="fill-current h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Invitado</span>
              </button>
            </div>
          </div>
        </body>
      </section>
    </div>
  );
};

export default Home;