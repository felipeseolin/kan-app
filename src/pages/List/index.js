import React, { useState, useEffect } from 'react';

import api from '../../services/api';

const List = () => {
  const [lists, setLists] = useState([]);

  const fetchLists = async () => {
    const response = await api.get('lists');
    setLists(response.data);
  };

  useEffect(() => {
    fetchLists();
  }, []);

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
        />
      ))}
    </div>
  );
};

export default List;
