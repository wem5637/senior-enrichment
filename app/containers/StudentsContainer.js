import React, {Component} from 'react';
import store from '../store';
import Students from '../components/Students';
import AddStudentContainer from './AddStudentContainer'

class StudentsContainer extends Component {

  constructor() {
    super();
    this.state = store.getState().students;
    
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().students);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Students students={this.state.list}/>
        <AddStudentContainer/>
      </div>
    );
  }

}

export default StudentsContainer;
