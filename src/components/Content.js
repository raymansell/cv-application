import React, { Component } from 'react';
import NameComponent from './NameComponent';
import NameForm from './NameForm';
import CvField from './CvField';
import CvFieldForm from './CvFieldForm';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: 'RAYMOND MANSELL',
      education: {
        school: 'Universidad Industrial de Santander',
        degree: 'Bachelor of Science',
        major: 'Mathematics',
        graduationYear: '2020-06',
      },
      workExperience: {
        employer: 'Massachusetts General Hospital',
        jobTitle: 'Emergency Medicine Physician',
        startDate: '2016-09',
        endDate: '2019-12',
      },
      isEditing: {
        fullname: false,
        education: false,
        workExperience: false,
      },
    };
    this.toggleEdit = this.toggleEdit.bind(this);

    // this.handleEdit = this.handleEdit.bind(this);
    this.handleEducationEdit = this.handleEducationEdit.bind(this);
    this.handleExperienceEdit = this.handleExperienceEdit.bind(this);
    this.handleFullNameEdit = this.handleFullNameEdit.bind(this);
  }

  toggleEdit(event) {
    if (event.type === 'submit') {
      event.preventDefault();
    }
    const CvFieldName = event.currentTarget.dataset.cvfield;

    this.setState((prevState) => {
      return {
        isEditing: {
          ...prevState.isEditing,
          [CvFieldName]: !prevState.isEditing[CvFieldName],
        },
      };
    });
  }

  handleFullNameEdit(event) {
    const { value } = event.target;
    this.setState((prevState) => {
      return {
        fullname: value,
      };
    });
  }

  handleEducationEdit(event) {
    const { name: fieldInputName, value } = event.target;
    this.setState((prevState) => {
      return {
        education: {
          ...prevState.education,
          [fieldInputName]: value,
        },
      };
    });
  }

  handleExperienceEdit(event) {
    const { name: fieldInputName, value } = event.target;
    this.setState((prevState) => {
      return {
        workExperience: {
          ...prevState.workExperience,
          [fieldInputName]: value,
        },
      };
    });
  }

  render() {
    const { isEditing } = this.state;
    return (
      <div className="content">
        {isEditing.fullname ? (
          <NameForm
            fullname={this.state.fullname}
            handleEdit={this.handleFullNameEdit}
            toggleEdit={this.toggleEdit}
          />
        ) : (
          <NameComponent
            fullname={this.state.fullname}
            toggleEdit={this.toggleEdit}
          />
        )}
        {/* <p>
          {this.state.fullname} {this.state.isEditing.fullname.toString()}
        </p> */}
        <div className="subcontent">
          {isEditing.education ? (
            <CvFieldForm
              title="education"
              data={this.state.education}
              handleEdit={this.handleEducationEdit}
              toggleEdit={this.toggleEdit}
            />
          ) : (
            <CvField
              title="education"
              data={this.state.education}
              toggleEdit={this.toggleEdit}
            />
          )}
          {/* <div>
            <p>{this.state.isEditing.education.toString()}</p>
            <p>{this.state.education.school}</p>
            <p>{this.state.education.degree}</p>
            <p>{this.state.education.major}</p>
            <p>{this.state.education.graduationYear}</p>
          </div> */}
          {isEditing.workExperience ? (
            <CvFieldForm
              title="workExperience"
              data={this.state.workExperience}
              handleEdit={this.handleExperienceEdit}
              toggleEdit={this.toggleEdit}
            />
          ) : (
            <CvField
              title="workExperience"
              data={this.state.workExperience}
              toggleEdit={this.toggleEdit}
            />
          )}
          {/* <div>
            <p>{this.state.isEditing.workExperience.toString()}</p>
            <p>{this.state.workExperience.employer}</p>
            <p>{this.state.workExperience.jobTitle}</p>
            <p>{this.state.workExperience.startDate}</p>
            <p>{this.state.experience.endDate}</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Content;
