import React from 'react';

import api from '../../services/api';

const Login = ({ history }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    //BACKGROUND
    backgroundColor: '#f2f2f2',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);

    api
      .post('/authenticate', {
        email: data.get('email'),
        password: data.get('password'),
      })
      .then(res => {
        const { user, token } = res.data;
        sessionStorage.setItem('@kan/currentuser', user);
        sessionStorage.setItem('@kan/token', token);
        history.push('/boards');
        return;
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="card" style={{ width: '70vw' }}>
        <form onSubmit={handleSubmit} method="POST">
          <div className="card-body">
            <h1 className="card-title">Login</h1>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                required
              />
            </div>
            <a href="/register" className="btn">
              Registrar-me
            </a>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-dark btn-lg">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
