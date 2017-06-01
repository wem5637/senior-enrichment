import React from 'react';
import {Link} from 'react-router';
import store from '../store';

import {updateStudent} from '../action-creators/student';

export default function UpdateStudent (props) {

  const handleStudentFirstNameChange = props.handleStudentFirstNameChange;
  const handleStudentLastNameChange = props.handleStudentLastNameChange;
  const handleStudentEmailChange = props.handleStudentEmailChange;
  const handleCampusChange = props.handleCampusChange;
  const updatedStudent = props.updatedStudent;
  const campuses = store.getState().campuses;
  
  return (
      <div className="col-xs-8">
        <form className="form-horizontal" onSubmit={() => store.dispatch(updateStudent(updatedStudent.id, updatedStudent))}>
          <div className="form-group">
            <h3>Update Student Information</h3>
            <label>Update Student First Name:</label>
            <input 
              type="text" 
              className="form-control" 
              id="firstname"
              value={updatedStudent.firstName}
              onChange={handleStudentFirstNameChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Update Student Last Name:</label>
            <input 
              type="text" 
              className="form-control" 
              id="lastname"
              value={updatedStudent.lastName}
              onChange={handleStudentLastNameChange}     
            ></input>
          </div>
          <div className="form-group">
            <label>Update Student Email:</label>
            <input 
              type="text" 
              className="form-control" 
              id="email"
              value={updatedStudent.email}
              onChange={handleStudentEmailChange}     
            ></input>
          </div>
          <div className="form-group">
            <label>Campus : </label>
            <select 
              id="campus-select" 
              value={updatedStudent.campusId}
              onChange={handleCampusChange}>
            {    
                campuses && campuses.list.map(campus=>(
                  <option key={campus.id} value={campus.id} selected={updatedStudent.campusId===campus.id?"selected":null}>{campus.name}</option>
                ))
            }
            </select>

          </div>
          <button type="submit" className="btn btn-default">Update</button>
        </form>        
      </div>
  );

};