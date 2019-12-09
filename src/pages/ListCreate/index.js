import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Errors from '../../components/Errors';
import MyNavbar from '../../components/MyNavbar';

import api from '../../services/api';

const ListCreate = ({ history }) => {
  const [errors, setErrors] = useState();
  const { idBoard } = useParams();

  const handleSubmit = event => {
    event.preventDefault();
    // Disable Button
    const $btn = document.querySelector('#btnForm');
    $btn.disabled = true;

    const data = new FormData(event.target);

    api
      .post('/lists', {
        name: data.get('name'),
        description: data.get('description'),
        _board: idBoard,
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
        <h1>Nova Lista</h1>
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

export default ListCreate;
