import React, {Component} from 'react';
import store from '../store';
import AllStudents from '../components/AllStudents';
import AddStudentContainer from './AddStudentContainer'
import UpdateStudentContainer from './UpdateStudentContainer'

class StudentsContainer extends Component {

  constructor(props) {
    super(props);

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
      <div>{console.log("state", this.state)}
        <h3>ALL STUDENTS</h3>
        <AllStudents students={this.state.students.list} campuses={this.state.campuses.list}/>
        <AddStudentContainer initCampVal = {this.state}/>
      </div>
    );
  }

}

export default StudentsContainer;
