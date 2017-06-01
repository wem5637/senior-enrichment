import React, {Component} from 'react';
import store from '../store';

import UpdateCampus from '../components/UpdateCampus';
import {updateCampus} from '../action-creators/campus'

class UpdateCampusContainer extends Component {

  constructor() {
    super();
    this.state = Object.assign({}, store.getState().campuses.selected)

    this.handleCampusNameChange = this.handleCampusNameChange.bind(this);
    this.handleCampusImageUrlChange = this.handleCampusImageUrlChange.bind(this);

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().campuses.selected);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleCampusNameChange (evt) {
    const value = evt.target.value;
    this.setState({
      name: value,
      dirty: true
    });
  }

  handleCampusImageUrlChange (evt) {
    const value = evt.target.value;
    this.setState({
      imageUrl: value,
      dirty: true
    });
  }


  render() {
    return (
   
      <UpdateCampus
        handleCampusNameChange={this.handleCampusNameChange}
        handleCampusImageUrlChange={this.handleCampusImageUrlChange}
        handleSubmit={this.handleSubmit}
        updatedCampus={this.state}
        
      />
    );
  }

}

export default UpdateCampusContainer;