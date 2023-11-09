// PostCard.jsx
import { FaHeart } from 'react-icons/fa';

export const PostCard = ({ post }) => (
  <div className="bg-white shadow-md rounded-md p-4">
    {/* Aquí va el contenido del post */}
    <button className="text-gray-500 hover:text-red-500">
      <FaHeart className="h-6 w-6" />
    </button>
    {/* Aquí van los demás elementos del post */}
  </div>
);


// CardContainer.jsx
import { Fragment } from 'react';

export const CardContainer = ({ children }) => {
  return (
    <Fragment>
      {/* Aquí se renderizan las cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </Fragment>
  );
};