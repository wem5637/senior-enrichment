import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';

class SidebarContainer extends Component {

  constructor() {
    super();
    
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
      <Sidebar/>
    );
  }

}

export default SidebarContainer;
