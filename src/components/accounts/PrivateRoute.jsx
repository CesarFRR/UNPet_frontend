import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
  
    if (!user) {
      navigate('/login');
      return null;
    }
  
    return children;
  };
  
  export default PrivateRoute;
