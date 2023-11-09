import { createContext, useState, useEffect } from "react";
import { UNPetAxios } from "../api/config";
import { logout } from '../api/accounts.api';
import { useMediaQuery } from 'react-responsive';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const UserAxios = new UNPetAxios('/accounts');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("Anonymous");
    const [urlfoto, setUrlfoto] = useState("/user-img-default.png");
    const isMobileQuery = useMediaQuery({ query: '(max-width: 600px)' });
    const [isMobile, setIsMobile] = useState(isMobileQuery); // Usar useMediaQuery para el valor inicial


    // Función para cambiar el estado de isMobile
    const toggleIsMobile = () => {
        const mob = !isMobile
        console.log('toggleIsMobile mob--->: ', mob)
        return setIsMobile(!isMobile);
    }

    // ...
    const logOut = () => {
        try {
            logout()
        } catch (error) {
            console.log(error);
        }

        // Si estás utilizando el almacenamiento local o las cookies para la persistencia de la sesión,
        // también deberías borrar la información del usuario de allí.
    };

    // Escuchar cambios en isMobileQuery y actualizar isMobile en consecuencia
    useEffect(() => {
        setIsMobile(isMobileQuery);
    }, [isMobileQuery]);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await UserAxios.get("/api/session/");
                console.log('tengo session?:-->', response, response.data);
                setIsAuthenticated(response.data.is_authenticated);

                setUsername(response.data.username ? response.data.username : "Anonymous");
                setUrlfoto(response.data.urlfoto || "/user-img-default.png");
            } catch (error) {
            }
        };
        checkAuth();
    }, []);

    return (
        <UserContext.Provider value={{ user: { isAuthenticated, username, urlfoto }, layout: { isMobile } }}>
            {children}
        </UserContext.Provider>
    );
};

