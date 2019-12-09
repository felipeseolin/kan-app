import React from 'react';

const Errors = ({ errors }) => {
  if (!errors) return null;

  return (
    <div className="alert alert-danger">
      {errors.map((error, index) => <p key={index}>{error}</p>)}
    </div>
  );
};

export default Errors;
