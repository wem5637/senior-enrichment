import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS, REMOVE_CAMPUS, UPDATE_CAMPUS} from '../constants';
import {receiveStudents} from './student'
import axios from 'axios';

import {hashHistory} from 'react-router';

export const receiveCampuses = campuses => ({
    type: RECEIVE_CAMPUSES,
    campuses
});

export const receiveCampus = campus => ({
    type: RECEIVE_CAMPUS,
    campus
});

export const remove = (id) => ({
    type: REMOVE_CAMPUS,
    id
});

export const update = (id, campus) => ({
    type: UPDATE_CAMPUS,
    id,
    campus
});


export const addNewCampus = campusName => {

  return (dispatch, getState) => {

    return axios.post('/api/campuses', {name: campusName})
      .then(res => res.data)
      .then(campus => {

        const newListOfCampuses = getState().campuses.list.concat([campus]);
        dispatch(receiveCampuses(newListOfCampuses));

      });
  };

};


export const getCampusById = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
      .then(response=>{
        dispatch(receiveCampus(response.data))
      })
  }
}




export const removeCampus = id => dispatch => {
  console.log('------removeCampus')
  dispatch(remove(id));
  axios.delete(`/api/campuses/${id}`)
       .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
};

export const updateCampus = (id, campus) => dispatch => {
  // dispatch(update(id, campus))
  axios.put(`/api/campuses/${id}`, campus)
       .then(res => dispatch(update(id, campus)))
       .then(() => {
           return axios.get(`/api/students`)
        })
       .then(function(students){
          console.log("student", students.data)
          dispatch(receiveStudents(students.data))
       })
       .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};


