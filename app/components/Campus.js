import React from 'react';
import {Link} from 'react-router';
import Students from './Students';

export default function Campus (props) {
	const name = props.selectedCampus.name;
	const imageUrl = props.selectedCampus.imageUrl;
	const id = props.selectedCampus.id
	const students = props.students.filter(function(student){
		return id===student.campusId
	})

  return (
    <div>{console.log(id, students)}
      <h3>SINGLE CAMPUS VIEW</h3>
      <h2>{name}</h2>
      <h2>imageurl: {imageUrl}</h2>
      <Students students={students}/>
    </div>
  );

};