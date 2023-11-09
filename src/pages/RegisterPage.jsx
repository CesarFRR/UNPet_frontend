
import  { useState } from 'react';
import {register} from '../api/accounts.api'
// import { Fragment } from 'react';
import { FaCheckCircle } from 'react-icons/fa';


const tiposDocumento = [
  { value: 'CC', label: 'Cédula de Ciudadanía (CC)' },
  { value: 'TI', label: 'Tarjeta de Identidad (TI)' },
  // Agrega más tipos de documento según sea necesario
];
const sexoOptions = [
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Femenino' },
];
export const localidades = [
  { id: '1', name: 'Usaquén' },
  { id: '2', name: 'Chapinero' },
];

export function Register() {

  const [tipoDocumento, setTipoDocumento] = useState('');
  const [sexo, setSexo] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    try {
      const resp = await register(data);
      navigate('/home');

    } catch (error) {
      setError(true);
      console.log('Login failed: ', error);
    }

  };

    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
              <FaCheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                <h1 className="text-2xl font-semibold text-gray-900 mt-6 text-center">Registrarse</h1>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="first_name" className="sr-only">
                      Nombres
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Nombres"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="sr-only">
Apellidos                    </label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Apellidos"
                    />
                  </div>
                  <div>
                    <label htmlFor="tipo_doc" className="sr-only">
                      Tipo de Documento
                    </label>
                    <select
                      id="tipo_doc"
                      name="tipo_doc"
                      autoComplete="tipo_doc"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                    >
                      <option value="">Tipo de Documento</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="n_doc" className="sr-only">
                      Número de documento
                    </label>
                    <input
                      id="n_doc"
                      name="n_doc"
                      type="text"
                      autoComplete="n_doc"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Número de documento"
                    />
                  </div>
                  <div>
                    <label htmlFor="sexo" className="sr-only">
                      Sexo
                    </label>
                    <select
                      id="sexo"
                      name="sexo"
                      autoComplete="sexo"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                    >
                      <option value="">Sexo</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="telefono" className="sr-only">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="text"
                      autoComplete="telefono"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Teléfono"
                    />
                  </div>
                  <div>
                    <label htmlFor="idlocalidad" className="sr-only">
                      Localidad
                    </label>
                    <select
                      id="idlocalidad"
                      name="idlocalidad"
                      autoComplete="idlocalidad"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                    >
                      <option value="">Localidad</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="photo_file" className="sr-only">
                      Photo file
                    </label>
                    <input
                      id="photo_file"
                      name="photo_file"
                      type="file"
                      accept="image/*"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Correo electrónico"
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className="sr-only">
                      Nombre de usuario
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Nombre de usuario"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                      placeholder="Contraseña"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                      Estoy de acuerdo con los términos y condiciones del servicio
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
                      ¿Necesitas ayuda?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.293 6.707a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Register;
