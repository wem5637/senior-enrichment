import React, {Component} from 'react';
import store from '../store';
import AddStudent from '../components/AddStudent';
import {addNewStudent} from '../action-creators/student';


class AddStudentContainer extends Component {

  constructor() {
    super();
    this.state = {
      firstName:'',
      lastName:'',
      email:''
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().playlists);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleFirstNameChange (evt) {
    const value = evt.target.value;
    this.setState({
      firstName: value,
      dirty: true
    });
  }

  handleLastNameChange (evt) {
    const value = evt.target.value;
    this.setState({
      lastName: value,
      dirty: true
    });
  }

  handleEmailChange (evt) {
    const value = evt.target.value;
    this.setState({
      email: value,
      dirty: true
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log(this.state)
    store.dispatch(addNewStudent(this.state));
  
  }

  render() {
    return (
      <AddStudent
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleEmailChange={this.handleEmailChange}
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
      />
    );
  }

}

export default AddStudentContainer;