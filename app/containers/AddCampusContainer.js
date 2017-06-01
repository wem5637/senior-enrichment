import React, {Component} from 'react';
import store from '../store';
import AddCampus from '../components/AddCampus';
import {addNewCampus} from '../action-creators/campus';

class AddCampusContainer extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
      dirty: true
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

    store.dispatch(addNewCampus(this.state.inputValue));
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <AddCampus
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={this.state.inputValue}
      />
    );
  }

}

export default AddCampusContainer;