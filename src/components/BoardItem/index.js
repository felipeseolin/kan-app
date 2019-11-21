import React from 'react';

const BoardList = ({ title, description, id, handleDelete }) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        <a href={`/boards/${id}`}>
          <h4>{title}</h4>
          <p>{description}</p>
        </a>
      </div>
      <div className="float-right">
        <div className="m-2 float-right">
          <a href={`/boards/${id}`} className="btn btn-sm btn-primary">
            Visualizar
          </a>
        </div>
        <div className="m-2 float-right">
          <a href={`/boards/${id}/edit`} className="btn btn-sm btn-secondary">
            Editar
          </a>
        </div>
        <div className="m-2 float-right">
          <button
            className="btn btn-sm btn-danger"
            type="button"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
