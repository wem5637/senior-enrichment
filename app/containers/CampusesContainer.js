import React, {Component} from 'react';
import store from '../store';
import Campuses from '../components/Campuses';

class CampusesContainer extends Component {

  constructor() {
    super();
    this.state = store.getState().campuses;
    
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().campuses);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Campuses campuses={this.state.list}/>
    );
  }

}

export default CampusesContainer;
