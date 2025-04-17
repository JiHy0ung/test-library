import React from 'react'
import MyBookPage from '../pages/MyBookPage/MyBookPage';

const PrivateRoute = ({authenticate}) => {
    return (
        authenticate == true ? <MyBookPage/> : <Navigate to="/login"/>
      );
}

export default PrivateRoute