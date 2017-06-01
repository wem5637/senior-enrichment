import React from 'react';
import {Link} from 'react-router';
import Students from './Students';

import UpdateCampusContainer from '../containers/UpdateCampusContainer'

export default function Campus (props) {
	const name = props.selectedCampus.name;
	const imageUrl = props.selectedCampus.imageUrl;
	const id = props.selectedCampus.id
	const students = props.students.filter(function(student){
		return id===student.campusId
	})

  return (
    <div>
      <div className="col-xs-4">
        <h3>A Look At {name} Campus</h3>
        <img src={imageUrl} className="img-thumbnail"/>
        <h2>Students Enrolled At {name}:</h2>
      </div>

      <UpdateCampusContainer/>

      <section className="col-xs-12">
        <Students students={students}/>
      </section>
    </div>
  );

};