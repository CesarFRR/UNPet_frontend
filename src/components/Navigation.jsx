import { Link } from 'react-router-dom';
import { FaHome, FaTrophy, FaUsers, FaPlusCircle } from 'react-icons/fa';


export function Navigation() {
  return (
    <div className="fixed h-full w-48 bg-gray-100 p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <FaHome className="h-6 w-6" />
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/trending" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <FaTrophy className="h-6 w-6" />
            <span>Tendencias</span>
          </Link>
        </li>
        <li>
          <Link to="/recent" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <FaUsers className="h-6 w-6" />
            <span>Recientes</span>
          </Link>
        </li>
        <li>
          <Link to="/pets" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <FaPlusCircle className="h-6 w-6" />
            <span>Mascotas</span>
          </Link>
        </li>
        <li>
          <Link to="/pet-create" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <FaPlusCircle className="h-6 w-6" />
            <span>Crear Mascota</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
