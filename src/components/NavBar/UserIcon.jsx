import { useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

function UserIcon({ user: userdata }) {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { user, layout } = useContext(UserContext);


    return (
        <>
            {user.isAuthenticated ?
                <div>
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/register" className="flex-shrink-0 flex items-center" >
                            <img className="block lg:hidden h-8 w-auto" src={userdata.urlfoto} alt="user_photo" />
                            <img className="hidden lg:block h-8 w-auto" src={userdata.urlfoto} alt="use_photo" />
                        </a>
                    </div>
                </div>
                : <div>
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/login" className="flex-shrink-0 flex items-center" >
                            <img className="block lg:hidden h-8 w-auto" src={userdata.urlfoto} alt="user_photo" />
                            <img className="hidden lg:block h-8 w-auto" src={userdata.urlfoto} alt="use_photo" />
                        </a>
                    </div>
                </div>
            }


        </>


    );
}

export default UserIcon;



