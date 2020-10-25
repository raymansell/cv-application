import React, { Component } from 'react';
import avatar from './../img/avatar.svg';
import CvField from './CvField';
import CvFieldForm from './CvFieldForm';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: {
        contact: false,
      },
      contact: {
        address: '2101 E NASA Pkwy, Houston, TX 77058, United States',
        phone: '+57 3015131394',
        email: 'raymansell@outlook.com',
      },
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  toggleEdit(event) {
    if (event.type === 'submit') {
      event.preventDefault();
    }
    /* The only available option for CvFieldName in this component
    is 'contact'. CvFieldName is used to dinamically access state
    in case we want to add more <CvField />'s to the Sidebar [e.g Certificates (this.state.certificates),
    Languages (this.state.languages), etc]. CvFieldName is being passed as a data-attr from either 
    the edit <button> tag of the CvField component, or from the 
    <form> tag of the CvFieldForm component.
    */
    const CvFieldName = event.currentTarget.dataset.cvfield;
    console.log(CvFieldName);

    this.setState((prevState) => {
      return {
        isEditing: {
          ...prevState.isEditing,
          [CvFieldName]: !prevState.isEditing[CvFieldName],
        },
      };
    });
  }

  handleEdit(event) {
    // lo que pudo ser y no fue parte 1
    // const CvFieldName = event.currentTarget.dataset.cvfield;

    /* fieldInputName  refers to 'address', 'phone' or 'email'
    in the case of CvFieldName === 'contact'
    */
    const { name: fieldInputName, value } = event.target;

    this.setState((prevState) => {
      // lo que pudo ser y no fue parte 2
      // return {
      //   [CvFieldName]: {
      //     ...prevState[CvFieldName],
      //     [fieldInputName]: value,
      //   },
      // };
      return {
        contact: {
          ...prevState.contact,
          [fieldInputName]: value,
        },
      };
    });
  }

  render() {
    const { isEditing } = this.state;
    return (
      <div className="sidebar">
        <img src={avatar} alt="avatar" className="avatar" />
        {isEditing.contact ? (
          <CvFieldForm
            title="contact"
            data={this.state.contact}
            handleEdit={this.handleEdit}
            toggleEdit={this.toggleEdit}
          />
        ) : (
          <CvField
            title="contact"
            data={this.state.contact}
            toggleEdit={this.toggleEdit}
          />
        )}
        {/* <p>{this.state.isEditing.contact.toString()}</p>
        <p>{this.state.contact.address}</p>
        <p>{this.state.contact.phone}</p>
        <p>{this.state.contact.email}</p> */}
      </div>
    );
  }
}
export default Sidebar;
