import React from 'react';
import store from '../store';
import {Link} from 'react-router';
import {removeStudent} from '../action-creators/student'

export default function Students (props) {

	const students = props.students;

  return (
    <div>
      <h3>STUDENTS VIEW</h3>
      {
      	students && students.map(student =>(
            <div id="student" className="col-xs-4" key={ student.id }>
              <Link className="media-body thumbnail" to={`/students/${student.id}`}>
                <img src=''/>
                <div className="caption">
                  <h5>
                    <span>{ `NAME: ${student.lastName}, ${student.firstName}` }</span>
                    <div>{ `CAMPUS: ${student.campusId?student.campusId:"***NEEDS CAMPUS"}` }</div>                    
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