import React, { useState, useEffect } from 'react';

import api from '../../services/api';

function BoardList() {
  const [boards, setBoards] = useState([]);

  return (
    <div className="container">
      <h1>Titulo</h1>
      <a href="/boards/new" className="btn btn-success">Novo quadro</a>
      <div className="card m-3">
        <a href="/boards/asdfasd">
            <div className="card-body">
                <h4>Nome</h4>
                <p>Descricao</p>
            </div>
            <div className="float-right">
                <div className="m-2 float-right">
                    <a href="/boards/this.id" className="btn btn-sm btn-primary">Visualizar</a>
                </div>
                <div className="m-2 float-right">
                    <a href="/boards/edit/this.id" className="btn btn-sm btn-secondary">Editar</a>
                </div>
                <div className="m-2 float-right">
                    <a href="/boards/destroy/hi" className="btn btn-sm btn-danger">Excluir</a>
                </div>
            </div>
          </a>
      </div>

    </div>
  )
}

export default BoardList
