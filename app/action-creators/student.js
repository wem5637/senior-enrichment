import { RECEIVE_STUDENTS, RECEIVE_STUDENT } from '../constants';
import axios from 'axios';

import {hashHistory} from 'react-router';

export const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});

export const receiveStudent = student => ({
    type: RECEIVE_STUDENT,
    student
});


export const addNewStudent = obj => {

  return (dispatch, getState) => {

    return axios.post('/api/students', obj)
      .then(res => res.data)
      .then(student => {
        const newListOfStudents = getState().students.list.concat([student]);
        console.log("student", student)
        console.log("obj", obj)
        dispatch(receiveStudents(newListOfStudents));
        hashHistory.push(`/students/${student.id}`)
      });

  };

};
