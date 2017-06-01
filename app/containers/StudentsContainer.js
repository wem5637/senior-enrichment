import React, {Component} from 'react';
import store from '../store';
import Students from '../components/Students';
import AddStudentContainer from './AddStudentContainer'

class StudentsContainer extends Component {

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
      <div>
        <h3>ALL STUDENTS</h3>
        <Students students={this.state.students.list} campuses={this.state.campuses.list}/>
        <AddStudentContainer/>
      </div>
    );
  }

}

export default StudentsContainer;
