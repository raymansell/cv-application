import React from 'react';

const NameComponent = (props) => {
  return (
    <div className="name">
      <h1>{props.fullname}</h1>
      <button
        className="edit-btn"
        onClick={props.toggleEdit}
        data-cvfield="fullname"
      >
        <i className="far fa-edit"></i>
      </button>
    </div>
  );
};

export default NameComponent;
