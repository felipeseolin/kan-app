import React from 'react';

const Register = () => {
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
    console.log(event);
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="card" style={{ width: '70vw' }}>
        <form onSubmit={handleSubmit} method="POST">
          <div className="card-body">
            <h1 className="card-title">Crie sua conta</h1>
            <div className="form-group">
              <label htmlFor="email">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
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
