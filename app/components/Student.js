import React from 'react';
import {Link} from 'react-router';

import UpdateStudentContainer from '../containers/UpdateStudentContainer';

export default function Student (props) {
const lastName = props.selectedStudent.lastName;
const firstName = props.selectedStudent.firstName;
const email = props.selectedStudent.email;
const campusId = props.selectedStudent.campusId;
const campusName = props.selectedStudent.campus?props.selectedStudent.campus.name:null;
const campuses = props.campuses;

  return (
    <div>
      <div className="col-xs-4">
        <h3>SINGLE STUDENT VIEW</h3>

        <h2>{`${lastName}, ${firstName}`}</h2>
        <h4>{email}</h4>
        <h4>Campus ID: {campusId}</h4>
        {campusId?
          <Link className="thumbnail" to={`/campuses/${campusId}`}>
        	 <h4>{`Go to campus ${campusName}`}</h4>
          </Link>:
        <h4>NEEDS CAMPUS ASSIGNED</h4>
        }
      </div>

      <UpdateStudentContainer/>

    </div>
  );

};