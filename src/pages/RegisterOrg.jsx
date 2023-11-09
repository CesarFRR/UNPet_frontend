import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaLock } from 'react-icons/fa';
import {orgRegister} from '../api/accounts.api'

export const localidades = [
  { id: '1', name: 'Usaquén' },
  { id: '2', name: 'Chapinero' },
  { id: '3', name: 'Santa Fe' },
  { id: '4', name: 'San Cristóbal' },
  { id: '5', name: 'Usme' },
  { id: '6', name: 'Tunjuelito' },
  { id: '7', name: 'Bosa' },
  { id: '8', name: 'Kennedy' },
  { id: '9', name: 'Fontibón' },
  { id: '10', name: 'Engativá' },
  { id: '11', name: 'Suba' },
  { id: '12', name: 'Barrios Unidos' },
  { id: '13', name: 'Teusaquillo' },
  { id: '14', name: 'Los Mártires' },
  { id: '15', name: 'Antonio Nariño' },
  { id: '16', name: 'Puente Aranda' },
  { id: '17', name: 'La Candelaria' },
  { id: '18', name: 'Rafael Uribe Uribe' },
  { id: '19', name: 'Ciudad Bolívar' },
  { id: '20', name: 'Sumapaz' },
  // Agrega más localidades según sea necesario
];

export function RegisterOrg() {
  const [localidad, setLocalidad] = useState('');
  const [errorNit, setErrorNit] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nitRegex = /^\d{1,3}\.\d{3}\.\d{3}-\d{1}$/;

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
 try {
      const resp = await orgRegister(data);
      navigate('/home');

    } catch (error) {
      setError(true);
      console.log('Login failed: ', error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <FaLock className="mx-auto h-12 w-auto text-indigo-600" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registrarse
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="nit" className="block text-sm font-medium text-gray-700">
                  NIT
                </label>
                <div className="mt-1">
                  <input
                    id="nit"
                    name="nit"
                    type="number"
                    autoComplete="family-name"
                    required
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errorNit ? 'border-red-500' : ''}`}
                    min="0"
                  />
                  {errorNit && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                      {errorNit.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <div className="mt-1">
                  <input
                    id="telefono"
                    name="telefono"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="idlocalidad" className="block text-sm font-medium text-gray-700">
                  Localidad
                </label>
                <div className="mt-1">
                  <select
                    id="idlocalidad"
                    name="idlocalidad"
                    autoComplete="family-name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={localidad}
                    onChange={(e) => setLocalidad(e.target.value)}
                  >
                    <option value="">Seleccione una localidad</option>
                    {localidades.map((loc) => (
                      <option key={'k-loc' + loc.id} value={loc.id}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  Estoy de acuerdo con los{' '}
                  <Link to="/legal/terms-and-conditions" className="font-medium text-indigo-600 hover:text-indigo-500">
                    términos y condiciones
                  </Link>{' '}
                  del servicio
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaCheckCircle className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  Registrarse
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">¿Ya tienes una cuenta?</span>
                </div>
              </div>
              <div className="mt-3">
                <Link
                  to="/login"
                  className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaLock className="h-5 w-5 text-gray-500 group-hover:text-gray-400" aria-hidden="true" />
                  </span>
                  Ingresa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
