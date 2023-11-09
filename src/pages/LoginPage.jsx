// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { login } from '../api/accounts.api';
import { FaLock } from 'react-icons/fa';

export function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userID: data.get('userID'),
      password: data.get('password'),
    });

    const resp = await login(data);
    //console.log(resp.data, resp);
    if (resp.isAuthenticated) {
      navigate('/home');
    } else {
      setError(true);
      console.log('Login failed: ', resp);
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/user-img-default.png"
          alt="User"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Ingresar
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          O{' '}
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            crea una cuenta
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico o nombre de usuario (username)
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="userID"
                  type="text"
                  autoComplete="username email"
                  required
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${error ? 'border-red-300' : 'border-gray-300'
                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                />
              </div>

              {error && (
                <p className="mt-2 text-sm text-red-600">
                  Credenciales incorrectas
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${error ? 'border-red-300' : 'border-gray-300'
                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">
                  Credenciales incorrectas
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/password"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaLock className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />

                </span>
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
