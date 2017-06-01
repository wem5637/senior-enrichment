import React, {Component} from 'react';
import store from '../store';
import AddStudent from '../components/AddStudent';
import {addNewStudent} from '../action-creators/student';

const initialState = {
      firstName:'',
      lastName:'',
      email:'',
      campusId: null
    }

class AddStudentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState, {campusId: props.initCampVal.campuses.list[0]?props.initCampVal.campuses.list[0].id:1})

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
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

  handleCampusChange (evt) {
    const value = evt.target.value;
    this.setState({
      campusId: parseInt(value),
      dirty: true
    });
  }


  handleSubmit (evt) {
    evt.preventDefault();
    store.dispatch(addNewStudent(this.state));
    this.setState(initialState);
  }

  render() {
    return (
      <AddStudent
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleCampusChange={this.handleCampusChange}
        handleEmailChange={this.handleEmailChange}
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        campusId={this.state.campusId}
        
      />
    );
  }

}

export default AddStudentContainer;