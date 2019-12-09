import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Errors from '../../components/Errors';
import MyNavbar from '../../components/MyNavbar';

import api from '../../services/api';

const CardCreate = ({ history }) => {
  const [errors, setErrors] = useState();
  const { idList, idBoard } = useParams();

  const handleSubmit = event => {
    event.preventDefault();
    // Disable button
    const $btn = document.querySelector('#btnForm');
    $btn.disabled = true;
    // Get form data
    const data = new FormData(event.target);

    api
      .post('/cards', {
        name: data.get('name'),
        description: data.get('description'),
        _list: idList,
      })
      .then(() => {
        history.push(`/boards/${idBoard}`);
      })
      .catch((err) => {
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
        <h1>Novo Cartão</h1>

        <Errors errors={errors} />

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name">Nome: </label>
            <input
              id="name"
              name="name"
              className="form-control"
              type="text"
              required
            />
          </div>
          {/* Description Textarea */}
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
            className="btn btn-success float-right"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    </>
  );
};

export default CardCreate;
