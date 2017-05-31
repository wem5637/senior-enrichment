import React, {Component} from 'react';
import store from '../store';
import Campuses from '../components/Campuses';

class CampusesContainer extends Component {

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
      <Campuses/>
    );
  }

}

export default CampusesContainer;
