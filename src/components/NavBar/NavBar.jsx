import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import logo from '/icons/android-chrome-192x192.png';
import userDefault from '/user-img-default.png';
import { LoginButton, RegisterButton, LogoutButton } from './NavButtons.jsx';
import SearchBar from '../SearchBar.jsx';
import UNPetMark from './UNPetMark.jsx';
import UserIcon from './UserIcon.jsx';
import { BiSearch } from 'react-icons/bi';
import { useMediaQuery } from 'react-responsive';

function NavBar() {
  const { user, layout } = useContext(UserContext);
  const {isMobile} = layout;


  const searchHandler = (searchText) => {
    console.log('este es el texto a buscar: ',searchText);
    console.log('es mobil?::--> ', layout.isMobile())
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <UNPetMark logo={logo}></UNPetMark>
          <SearchBar onSearch={searchHandler}/>
          
            <UserIcon user={user}></UserIcon>
          
          {isMobile && (
            <div>
              <BiSearch/>
              movile mode
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
export default NavBar;

