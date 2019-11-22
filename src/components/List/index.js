import React from 'react';

const List = ({ list, children }) => {
  return (
    <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <div className="card-header">
          <h2>{list.name}</h2>
          <p>{list.description}</p>
        </div>
        <div className="card-body">
          {children}
          <a className="btn btn-success" href="/lists/{{ this.id }}/cards/new">
            Novo cartão
          </a>
        </div>
        <div className="card-footer">
          <a
            href="/boards/{{ ../board.id }}/lists/{{ this.id }}"
            className="btn btn-primary"
          >
            Editar
          </a>
          <a
            href="/boards/{{ ../board.id }}/lists/destroy/{{ this.id }}"
            className="btn btn-danger"
          >
            Excluir
          </a>
        </div>
      </div>
    </div>
  );
};

export default List;
