import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MyNavbar from '../../components/MyNavbar';

import api from '../../services/api';

const CardEdit = () => {
  const { idList, idBoard, idCard } = useParams();

  const [lists, setLists] = useState([]);
  const [card, setCard] = useState({});
  const [nameField, setName] = useState('');
  const [descriptionField, setDescription] = useState('');
  const [listField, setList] = useState(idList);

  const fetchLists = async () => {
    const response = await api.get('lists');
    setLists(response.data);
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchCard = async () => {
    const response = await api.get(`cards/${idCard}`);
    setCard(response.data);
    setName(response.data.name);
    setDescription(response.data.description);
  };

  useEffect(() => {
    fetchCard();
  }, []);

  const handleEdit = event => {
    event.preventDefault();
    // Disable button
    const $btn = document.querySelector('#btnForm');
    $btn.disabled = true;
    // Get form data
    const data = new FormData(event.target);

    api
      .patch(`/cards/${idCard}`, {
        name: data.get('name'),
        description: data.get('description'),
        _list: data.get('list'),
      })
      .then(() => {
        alert(`Cartão: ${card.name} atualizado com sucesso`);
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

  const handleListChange = event => {
    setList(event.target.value);
  };

  const renderOptions = () => {
    if (lists) {
      return lists.map(list => (
        <option key={list._id} value={list._id}>
          {list.name}
        </option>
      ));
    }
    return <option>Selecione uma opção...</option>;
  };

  return (
    <>
      <MyNavbar/>
      <div className="container">
        <h1>{card ? card.name : 'Editar cartão'}</h1>

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

          {/* Change list */}
          <div className="form-group">
            <label htmlFor="list">Trocar de lista</label>
            <select
              id="list"
              name="list"
              className="form-control"
              value={listField}
              onChange={handleListChange}
            >
              {lists.map(list => (
                <option key={list._id} value={list._id}>
                  {list.name}
                </option>
              ))}
            </select>
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

export default CardEdit;
