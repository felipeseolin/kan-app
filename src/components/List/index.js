import React from 'react';

const List = ({ list, idBoard, handleDelete, children }) => {
  return (
    <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <div className="card-header">
          <h2>{list.name}</h2>
          <p>{list.description}</p>
        </div>
        <div className="card-body">
          {children}
          <a
            className="btn btn-success"
            href={`/boards/${idBoard}/lists/${list._id}/cards/new`}
          >
            Novo cartão
          </a>
        </div>
        <div className="card-footer">
          <a
            href={`/boards/${idBoard}/lists/${list._id}/edit`}
            className="btn btn-primary"
          >
            Editar
          </a>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              handleDelete(list._id);
            }}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
