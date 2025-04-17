import React from 'react'
import MyBookPage from '../pages/MyBookPage/MyBookPage';
import loginStore from '../stores/loginStore';

const PrivateRoute = () => {

    const {authenticate} = loginStore();
    return (
        authenticate == true ? <MyBookPage/> : <Navigate to="/login"/>
      );
}

export default PrivateRoute