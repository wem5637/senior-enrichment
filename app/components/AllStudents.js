import React from 'react';
import store from '../store';
import {Link} from 'react-router';
import {removeStudent} from '../action-creators/student'

export default function Students (props) {

	const students = props.students;
  const campuses = props.campuses;


  return (
    <div>
      <h3></h3>
      {
      	students && students.map(student =>(
            <div id="student" className="col-xs-8" key={ student.id }>
              <Link className="media-body thumbnail" to={`/students/${student.id}`}>
                <img src=''/>
                <div className="caption">
                  <h5>
                    <span className="col-xs-6">{ `NAME: ${student.lastName}, ${student.firstName}` }</span>
                    <span className="col-xs-6">{ ` CAMPUS: ${student.campus?student.campus.name:student.campusId}` }</span>                    
                  </h5>
                </div>
              </Link>
              <div className="media-right media-middle">
                <button className="btn btn-default"
                        onClick={() => store.dispatch(removeStudent(student.id))}>
                  X
                </button>
              </div>
            </div>      		
      	))
      }

    </div>
  );

};