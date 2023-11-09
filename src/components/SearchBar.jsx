// import { useState } from "react";
// import { BiSearch } from 'react-icons/bi';
// function SearchBar({ onSearch }) {
//   const [searchText, setSearchText] = useState('');
//   const handleSearch = () => {
//     // Elimina los espacios al principio y al final del texto y reemplaza cualquier secuencia de espacios en blanco con un solo espacio
//     const cleanedText = searchText.trim().replace(/\s+/g, ' ');
//     // Divide el texto en palabras
//     const words = cleanedText.split(' ');
//     // Separa las palabras que comienzan con '@' y las que no
//     const atWords = words.filter(word => word.startsWith('@'));
//     const otherWords = words.filter(word => !word.startsWith('@'));
//     // Ordena las palabras que comienzan con '@' en orden alfabético
//     atWords.sort();
//     // Combina las palabras que comienzan con '@' y las que no
//     const searchTextFormated = [...atWords, ...otherWords].join(' ');

//     onSearch(searchTextFormated);
//   };
//   const highlightTags = (text) => {
//     const regex = /@(\w+)(?!\S)/g;
//     return text.replace(regex, '<span class="tag">@$1</span>');
//   };
//   return (
//     <div  style={{ maxWidth: "500px" }}>
//       <input
//         onInput={(e) => setSearchText(e.target.textContent)}
//       />
//       <button
//         onClick={handleSearch}
//       >
//         <BiSearch className="h-5 w-5" />
//       </button>
//     </div>
//   );
// }
// export default SearchBar;


import { useState } from "react";
import { BiSearch } from 'react-icons/bi';



function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Elimina los espacios al principio y al final del texto y reemplaza cualquier secuencia de espacios en blanco con un solo espacio
    const cleanedText = searchText.trim().replace(/\s+/g, ' ');
    // Divide el texto en palabras, tratando cualquier '@' seguido de caracteres no espaciales como una palabra separada
    const words = cleanedText.split(/(?=\s)|(?=@\S)/);
    // Separa las palabras que comienzan con '@' y las que no
    const atWords = words.filter(word => word.startsWith('@'));
    const otherWords = words.filter(word => !word.startsWith('@'));
    // Ordena las palabras que comienzan con '@' en orden alfabético
    atWords.sort();
    // Combina las palabras que comienzan con '@' y las que no
    const searchTextFormated = [...atWords, ...otherWords].join(' ');

        onSearch(searchTextFormated);
      };
      // const highlightTags = (text) => {
      //   const regex = /@(\w+)(?!\S)/g;
      //   return text.replace(regex, '<span class="tag">@$1</span>');
      // };
  return (
    <div className="w-full mx-auto flex justify-center">
      <div className="relative w-2/3">
        <input
          className="w-full border border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
          type="text"
          placeholder="Buscar.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); // Evita la acción por defecto del Enter (submit del formulario)
              handleSearch();
            }
          }}
        />
        <button className="absolute right-0 top-0 bottom-0 px-3" onClick={handleSearch}>
          <BiSearch />
        </button>
      </div>
    </div>
  );
}


export default SearchBar;
