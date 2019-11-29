import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import List from '../../components/List';
import Card from '../../components/Card';

import api from '../../services/api';

const BoardDetails = () => {
  const { id } = useParams();
  const [board, setBoard] = useState();

  const fetchBoard = async () => {
    const response = await api.get(`boards/all/${id}`);
    setBoard(response.data);
  };

  useEffect(() => {
    fetchBoard();
  }, []);

  const handleListDelete = id => {
    api
      .delete(`/lists/${id}`)
      .then(() => alert('Lista excluida'))
      .catch(() => alert('Erro ao excluir'))
      .finally(() => window.location.reload());
  };

  const handleCardDelete = id => {
    api
      .delete(`/cards/${id}`)
      .then(() => alert('Cartão excluido'))
      .catch(() => alert('Erro ao excluir'))
      .finally(() => window.location.reload());
  };

  return (
    <div className="container-fluid">
      {board ? (
        <>
          <h1>{board ? board.name : ''}</h1>
          <p>{board ? board.descriptio : ''}</p>

          <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3 mt-3 p-0">
            <a
              href={`/boards/${board._id}/lists/new`}
              className="btn btn-success"
            >
              Nova lista
            </a>
          </div>

          <div className="row">
            {board.lists.map(list => (
              <List
                key={list._id}
                list={list}
                idBoard={board._id}
                handleDelete={handleListDelete}
              >
                {list.cards.map(card => (
                  <Card
                    key={card._id}
                    card={card}
                    idList={list._id}
                    idBoard={board._id}
                    handleDelete={handleCardDelete}
                  />
                ))}
              </List>
            ))}
          </div>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default BoardDetails;
