import React, { useState, useEffect } from 'react';

import BoardItem from '../../components/BoardItem';
import api from '../../services/api';

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  const fetchBoards = async () => {
    const response = await api.get('boards');
    setBoards(response.data);
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  const handleDelete = id => {
    api
      .delete(`/boards/${id}`)
      .then(() => alert('Quadro excluido'))
      .catch(() => alert('Erro ao excluir'))
      .finally(() => window.location.reload());
  };

  return (
    <div className="container">
      <h1>Titulo</h1>
      <a href="/boards/new" className="btn btn-success">
        Novo quadro
      </a>
      {boards.map(board => (
        <BoardItem
          key={board._id}
          title={board.name}
          description={board.description}
          id={board._id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default BoardList;
