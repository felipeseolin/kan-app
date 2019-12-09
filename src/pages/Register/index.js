import React, { useState } from 'react';
import api from '../../services/api';

const Register = ({ history }) => {
  const [errors, setErrors] = useState(null);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const password = data.get('password');
    const passwordConfirm = data.get('password-confirm');
    // Validation
    if (password && passwordConfirm) {
      if (password !== passwordConfirm) {
        alert('As senhas digitadas não conferem');
        return;
      }
      if (password.length < 6) {
        alert('A senha deve possuir ao menos 6 caracteres');
        return;
      }
    }

    api
      .post('/register', {
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
        passwordConfirm: data.get('password-confirm'),
      })
      .then((res) => {
        const { user, token } = res.data;
        sessionStorage.setItem('@kan/currentuser', user);
        sessionStorage.setItem('@kan/token', token);
        history.push('/boards');
      })
      .catch((err) => {
        setErrors(err.response.data.error);
        alert('Ocorreu um erro. Preencha todos os campos corretamente.');
      });
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="card" style={{ width: '70vw' }}>
        <form onSubmit={handleSubmit} method="POST">
          <div className="card-body">
            <h1 className="card-title">Crie sua conta</h1>
            {
              errors
                ? (
                  <div className="alert alert-danger">
                    {errors.map((error, index) => <p key={index}>{error}</p>)}
                  </div>
                )
                : null
            }
            <div className="form-group">
              <label htmlFor="email">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                minLength={1}
                required
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="password">Confime sua senha</label>
              <input
                id="password-confirm"
                name="password-confirm"
                type="password"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-dark btn-lg">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
