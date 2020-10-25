import React, { Component } from 'react';

class CvFieldForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, data, toggleEdit, handleEdit } = this.props;

    const fieldItemInputs = Object.keys(data).map((key, idx) => {
      //converting camelCase to Camel Case
      const detail = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
      /* uniqid() will not work as quickly as it needs to in order
      to have unique keys for each <div>. Will use array index instead. */
      // proof: console.log(uniqid());
      return (
        <div key={idx}>
          <label className="cv-detail">
            {detail}
            <input
              type="text"
              onChange={handleEdit}
              name={key}
              value={data[key]}
            ></input>
          </label>
        </div>
      );
    });

    return (
      <form
        className="cv-field-form"
        onSubmit={toggleEdit}
        data-cvfield={title}
      >
        <div className="cv-field-title">
          <h2>
            {title
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())}
          </h2>
        </div>
        {fieldItemInputs}
        <button style={{ marginTop: '10px' }} className="submit-btn">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default CvFieldForm;
