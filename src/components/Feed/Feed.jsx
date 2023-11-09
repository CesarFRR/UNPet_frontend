import React from 'react';
import { FaHeart, FaComment, FaPaw, FaShareAlt } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
const Feed = ({ posts }) => {
  const PAGE_NUMBER = 1;

  const { count, next, previous, results } = posts
  console.log('datos: ', count, next, previous, results);

  const [nextPage, setNextPage] = useState(next);
  const lastPostElementRef = useRef(null);
  useEffect(() => {
    if (nextPage === null) {
      console.log('nextpage ==null')
      return; // No hay más páginas para cargar
    }
  
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('SE LLEGÓ A LA ULTIMA PÁGINA');
      }
    });
  
    if (lastPostElementRef.current) {
      observer.observe(lastPostElementRef.current);
    }
  
    return () => {
      if (lastPostElementRef.current) {
        observer.unobserve(lastPostElementRef.current);
      }
    };
  }, [nextPage]);
  return (
    <>
      {results.map((post, index) => (
        <div key={post.id} className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <a href="#">
                <img src={post.urlfoto} alt={post.username} className="w-10 h-10 rounded-full mr-2" />
              </a>
              <div>
                <a href="#">
                  <p className="text-sm font-medium">{post.username}</p>
                </a>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">{post.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{post.content}</p>
            <img className="w-full" src={post.urlfoto} alt={post.title} />
            <div className="flex items-center justify-between m-3">
              <div className="flex items-center justify-between w-full mt-3">
                <a href="#" className="flex items-center ml-4">
                  <FaHeart className="w-5 h-5 text-gray-500 mr-1" />
                  <p className="text-gray-500 text-sm">{post.likes}</p>
                </a >
                <a href="/login" className="flex items-center">
                  <FaComment className="w-5 h-5 text-gray-500 mr-1" />
                  <span className="text-gray-500 text-sm mr-1">{post.comments}</span>
                </a >
                <a href="#" className="flex items-center" >
                  <FaPaw className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm mr-1">Adoptar</span>
                </a>
                <a href="#" className="flex items-center  mr-4">
                  <FaShareAlt className="w-5 h-5 text-gray-500 mr-1" />
                </a >
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Feed;