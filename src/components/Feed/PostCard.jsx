// PostCard.jsimport { Fragment } from 'react';
import { FaHeart } from 'react-icons/fa';
const PostCard = ({ post }) => {
  const { fotos, titulo, estado, descripcion, fechaPublicacion, likes } = post;

  // Formatear la fecha
  const fecha = new Date(fechaPublicacion).toLocaleDateString();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* Mostrar la primera foto */}
      {fotos[0] && (
        <img className="w-full" src={fotos[0]} alt="Foto de la mascota" />
      )}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{titulo}</div>
        <p className="text-gray-700 text-base">{descripcion}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {estado}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {fecha}
        </span>
        <span className="inline-block float-right">
        <FaHeart className="h-5 w-5 text-red-500 inline-block" />
          <span className="text-gray-700 text-sm font-semibold ml-1">
            {likes}
          </span>
        </span>
      </div>

      {/* Mostrar las demás fotos */}
      {fotos.slice(1).map((foto, index) => (
        <Fragment key={index}>
          <div className="px-6 py-4">
            <img className="w-full" src={foto} alt="Foto de la mascota" />
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default PostCard;