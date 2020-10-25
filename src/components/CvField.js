import React from 'react';
import uniqid from 'uniqid';

const CvField = (props) => {
  const { title, data } = props;

  const fieldItems = Object.keys(data).map((key) => {
    //converting camelCase to Camel Case
    const detail = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());

    return (
      <div key={uniqid()}>
        <h4 className="cv-detail">{detail}</h4>
        <p>{data[key]}</p>
      </div>
    );
  });
  return (
    <div id={title} className="cv-field">
      <div className="cv-field-title">
        <h2>
          {title
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase())}
        </h2>
        <button
          className="edit-btn"
          onClick={props.toggleEdit}
          data-cvfield={title}
        >
          <i className="far fa-edit"></i>
        </button>
      </div>
      {fieldItems}
    </div>
  );
};

export default CvField;
