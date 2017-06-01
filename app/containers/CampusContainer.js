import React, {Component} from 'react';
import store from '../store';
import Campus from '../components/Campus';

class CampusContainer extends Component {

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
      <Campus
      selectedCampus={this.state.campuses.selected}
      students={this.state.students.list}

      />
    );
  }

}

export default CampusContainer;
