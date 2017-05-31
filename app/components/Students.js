import React from 'react';
import {Link} from 'react-router';

export default function Students (props) {

	const students = props.students;

  return (
    <div>
      <h3>STUDENTS VIEW</h3>
      {
      	students && students.map(student =>(
            <div className="col-xs-4" key={ student.id }>
              <Link className="thumbnail" to={`/students/${student.id}`}>
                <img src=''/>
                <div className="caption">
                  <h5>
                    <span>{ `${student.lastName}, ${student.firstName}` }</span>
                  </h5>
                </div>
              </Link>
            </div>      		
      	))
      }
    </div>
  );

};