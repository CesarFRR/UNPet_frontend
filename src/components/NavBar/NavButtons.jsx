import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

export function LoginButton() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!user.isAuthenticated) {
            navigate('/login');
        }
    };

    return (
        <button
            onClick={handleLogin}
            disabled={user.isAuthenticated}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Iniciar sesión
        </button>
    );
}

export function RegisterButton() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!user.isAuthenticated) {
            navigate('/register');
        }
    };

    return (
        <button
            onClick={handleRegister}
            disabled={user.isAuthenticated}
            className="bg-white hover:bg-gray-100 text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded shadow"
        >
            Registrarse
        </button>
    );
}

export function LogoutButton() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setUser({ isAuthenticated: false });
        navigate('/logout');
    };

    return (
        <button
            onClick={handleLogout}
            disabled={!user.isAuthenticated}
            className="bg-white hover:bg-gray-100 text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded shadow"
        >
            Cerrar sesión
        </button>
    );
}
