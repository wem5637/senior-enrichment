import React, {Component} from 'react';
import store from '../store';

import UpdateStudent from '../components/UpdateStudent';
import {updateStudent} from '../action-creators/student'

class UpdateStudentContainer extends Component {

  constructor() {
    super();
    this.state = Object.assign({}, store.getState().students.selected)

    this.handleStudentFirstNameChange = this.handleStudentFirstNameChange.bind(this);
    this.handleStudentLastNameChange = this.handleStudentLastNameChange.bind(this);
    this.handleStudentEmailChange = this.handleStudentEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().students.selected);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleStudentFirstNameChange (evt) {
    const value = evt.target.value;
    this.setState({
      firstName: value,
      dirty: true
    });
  }

  handleStudentLastNameChange (evt) {
    const value = evt.target.value;
    this.setState({
      lastName: value,
      dirty: true
    });
  }

  handleStudentEmailChange (evt) {
    const value = evt.target.value;
    this.setState({
      email: value,
      dirty: true
    });
  }

  handleCampusChange (evt) {
    const value = evt.target.value;
    this.setState({
      campusId: parseInt(value),
      dirty: true
    });
  }


  render() {
    return (
   
      <UpdateStudent
        handleStudentFirstNameChange={this.handleStudentFirstNameChange}
        handleStudentLastNameChange={this.handleStudentLastNameChange}
        handleStudentEmailChange={this.handleStudentEmailChange}
        handleCampusChange={this.handleCampusChange}
        updatedStudent={this.state}
        
      />
    );
  }

}

export default UpdateStudentContainer;