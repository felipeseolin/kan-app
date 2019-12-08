import React, { useEffect } from 'react';

const Logout = ({ history }) => {
  useEffect(() => {
    localStorage.removeItem('@kan/currentuser');
    localStorage.removeItem('@kan/token');
    history.push('/');
  }, []);

  return null;
};

export default Logout;
