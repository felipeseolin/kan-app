import React, { useState } from 'react';

import MyNavbar from '../../components/MyNavbar';
import api from '../../services/api';
import Errors from '../../components/Errors';

const BoardCreate = ({ history }) => {
  const [errors, setErrors] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    const $btn = document.querySelector('#btnForm');
    $btn.disabled = true;

    const data = new FormData(event.target);

    api
      .post('/boards', {
        name: data.get('name'),
        description: data.get('description'),
      })
      .then(() => {
        history.push('/boards');
      })
      .catch(err => {
        setErrors(err.response.data.error);
        alert('Ocorreu um erro tente novamente');
      })
      .finally(() => {
        $btn.disabled = false;
      });
  };

  return (
    <>
      <MyNavbar/>
      <div className="container">
        <h1>Novo quadro</h1>
        <Errors errors={errors} />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              name="name"
              className="form-control"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição: </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              cols="5"
              rows="10"
            />
          </div>
          <button
            id="btnForm"
            type="submit"
            className="btn btn-success float-right"
          >
            Salvar
          </button>
        </form>
      </div>
    </>
  );
};

export default BoardCreate;
