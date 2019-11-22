import React from 'react';

const Card = ({ idList, card }) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h4>{card.name}</h4>
        <p>{card.description}</p>
      </div>
      <div className="float-right">
        <div className="m-1 float-right">
          <a
            href={`/lists/${idList}}/cards/${card.id}`}
            className="btn btn-sm btn-primary"
          >
            Editar
          </a>
        </div>
        <div className="m-1 float-right">
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={() => console.log('vai deletar')}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
