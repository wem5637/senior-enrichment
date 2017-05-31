import React, {Component} from 'react';
import store from '../store';
import Campus from '../components/Campus';

class CampusContainer extends Component {

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
      <Campus/>
    );
  }

}

export default CampusContainer;
