import React from 'react';
import {Link} from 'react-router';

export default function Student (props) {
const lastName = props.selectedStudent.lastName;
const firstName = props.selectedStudent.firstName;
const email = props.selectedStudent.email;
const campusId = props.selectedStudent.campusId;
const campusName = props.selectedStudent.campus?props.selectedStudent.campus.name:null;

  return (
    <div>
      <h3>SINGLE STUDENT VIEW</h3>

      <h2>{`${lastName}, ${firstName}`}</h2>
      <h4>{email}</h4>
      {campusId?
        <Link className="thumbnail" to={`/campuses/${campusId}`}>
      	<h4>{`Campus: ${campusName}`}</h4>
      </Link>:
      <h4>NEEDS CAMPUS ASSIGNED</h4>
      }
    </div>
  );

};