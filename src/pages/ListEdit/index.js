import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MyNavbar from '../../components/MyNavbar';

import api from '../../services/api';

const ListEdit = () => {
  const { idBoard, idList } = useParams();
  const [list, setList] = useState({});
  const [nameField, setName] = useState('');
  const [descriptionField, setDescription] = useState('');

  const fetchList = async () => {
    const response = await api.get(`/lists/${idList}`);
    setList(response.data);
    setName(response.data.name);
    setDescription(response.data.description);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleEdit = event => {
    event.preventDefault();
    // Disable Button
    const $btn = document.querySelector('#btnForm');
    $btn.disabled = true;

    const data = new FormData(event.target);

    api
      .patch(`/lists/${idList}`, {
        name: data.get('name'),
        description: data.get('description'),
        _board: idBoard,
      })
      .then(() => {
        alert(`Lista: ${list.name} atualizada!`);
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
        {list ? (
          <>
            <h1>{list.name}</h1>

            <form onSubmit={handleEdit}>
              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="name">Nome: </label>
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
              {/* Description Textarea */}
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
          </>
        ) : (
          <h1>Carregando...</h1>
        )}
      </div>
    </>
  );
};

export default ListEdit;
