import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../Contex/GetUserContex';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation();
    if (loading) {
        return <div>Loading .......</div>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;