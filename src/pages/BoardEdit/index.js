import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Errors from '../../components/Errors';
import MyNavbar from '../../components/MyNavbar';

import api from '../../services/api';

const BoardEdit = ({ history }) => {
  const [errors, setErrors] = useState();
  const { id } = useParams();
  const [board, setBoard] = useState({});
  const [nameField, setName] = useState('');
  const [descriptionField, setDescription] = useState('');

  const fetchBoard = async () => {
    const response = await api.get(`boards/${id}`);
    setBoard(response.data);
    setName(response.data.name);
    setDescription(response.data.description);
  };

  useEffect(() => {
    fetchBoard();
  }, []);

  const handleEdit = event => {
    event.preventDefault();
    const $btn = document.querySelector('#btnForm');
    $btn.disabled = true;

    const data = new FormData(event.target);

    api
      .patch(`/boards/${id}`, {
        name: data.get('name'),
        description: data.get('description'),
      })
      .then(() => {
        history.push('/boards');
      })
      .catch((err) => {
        setErrors(err.response.data.error);
        alert('Ocorreu um erro tente novamente');
      })
      .finally(() => {
        $btn.disabled = false;
      });
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  return (
    <>
      <MyNavbar/>
      <div className="container">
        <h1>{board ? board.name : 'Quadro'}</h1>
        <Errors errors={errors} />
        <form onSubmit={handleEdit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              name="name"
              className="form-control"
              type="text"
              value={nameField}
              onChange={handleNameChange}
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
              value={descriptionField}
              onChange={handleDescriptionChange}
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

export default BoardEdit;
