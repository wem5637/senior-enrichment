import React, {Component} from 'react';
import store from '../store';
import Student from '../components/Student';

class StudentContainer extends Component {

  constructor() {
    super();
    this.state = store.getState();

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Student
      selectedStudent={this.state.students.selected}
      />
    );
  }

}

export default StudentContainer;
