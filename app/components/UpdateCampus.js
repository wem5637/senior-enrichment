import React from 'react';
import {Link} from 'react-router';
import store from '../store';

import {updateCampus} from '../action-creators/campus';

export default function UpdateCampus (props) {

  const handleCampusNameChange = props.handleCampusNameChange;
  const handleCampusImageUrlChange = props.handleCampusImageUrlChange;
  const handleSubmit = props.handleSubmit;

  const updatedCampus = props.updatedCampus;


  return (
      <div className="col-xs-8">
        <form className="form-horizontal" onSubmit={() => store.dispatch(updateCampus(updatedCampus.id, updatedCampus))}>
          <div className="form-group">
            <h3>Update Campus Information</h3>
            <label>Update Campus Name:</label>
            <input 
              type="text" 
              className="form-control" 
              id="firstname"
              value={updatedCampus.name}
              onChange={handleCampusNameChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Update Campus Image URL:</label>
            <input 
              type="text" 
              className="form-control" 
              id="lastname"
              value={updatedCampus.imageUrl}
              onChange={handleCampusImageUrlChange}           
            ></input>
          </div>
          <button type="submit" className="btn btn-default">Update</button>
        </form>
      </div>
  );

};