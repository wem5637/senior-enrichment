import React, {Component} from 'react';
import store from '../store';
import Campuses from '../components/Campuses';
import AddCampusContainer from './AddCampusContainer'

import removeCampus from '../action-creators/campus'

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
      <div>
        <Campuses campuses={this.state.list}/>
        <section>
         <AddCampusContainer/>
        </section>
      </div>
    );
  }

}

export default CampusesContainer;
