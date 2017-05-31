import React, {Component} from 'react';
import store from '../store';
import Students from '../components/Students';

class StudentsContainer extends Component {

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
      <Students/>
    );
  }

}

export default StudentsContainer;
