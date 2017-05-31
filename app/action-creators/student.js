import { RECEIVE_STUDENTS, RECEIVE_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT } from '../constants';
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

export const remove = (id) => ({
    type: REMOVE_STUDENT,
    id
});

export const update = (student) => ({
    type: UPDATE_STUDENT,
    student
});


export const addNewStudent = obj => {

  return (dispatch, getState) => {

    return axios.post('/api/students', obj)
      .then(res => res.data)
      .then(student => {
        const newListOfStudents = getState().students.list.concat([student]);
        dispatch(receiveStudents(newListOfStudents));

      });

  };

};

export const getStudentById = studentId => {
  return dispatch => {
    axios.get(`/api/students/${studentId}`)
      .then(response=>{
        dispatch(receiveStudent(response.data))
      })
  }
}


export const removeStudent = id => dispatch => {
  console.log('------removeStudent')
  dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
       .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};