import React, {Component} from 'react';
import store from '../store';
import Student from '../components/Student';

class StudentContainer extends Component {

  constructor() {
    super();
    
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().playlists);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Student/>
    );
  }

}

export default StudentContainer;
