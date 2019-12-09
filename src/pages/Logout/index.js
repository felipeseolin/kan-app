import React, { useEffect } from 'react';

const Logout = ({ history }) => {
  useEffect(() => {
    sessionStorage.clear();
    history.push('/');
  }, []);

  return null;
};

export default Logout;
