import React from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

const ListCreate = () => {
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
        alert('Nova Lista salva com sucesso');
        window.location.href = `/boards/${idBoard}`;
      })
      .catch(err => {
        alert('Ocorreu um erro tente novamente');
        window.location.reload();
      })
      .finally(() => {
        $btn.disabled = false;
      });
  };

  return (
    <div className="container">
      <h1>Nova Lista</h1>

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
  );
};

export default ListCreate;
