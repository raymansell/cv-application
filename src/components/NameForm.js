import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fullname, handleEdit, toggleEdit } = this.props;
    return (
      <form
        className="name name-form"
        onSubmit={toggleEdit}
        data-cvfield="fullname"
      >
        <input type="text" value={fullname} onChange={handleEdit} required />
        <button className="submit-btn">SUBMIT</button>
      </form>
    );
  }
}

export default NameForm;
