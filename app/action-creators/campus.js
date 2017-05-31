import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS } from '../constants';
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

export const addNewCampus = campusName => {

  return (dispatch, getState) => {

    return axios.post('/api/campuses', {name: campusName})
      .then(res => res.data)
      .then(campus => {
        const newListOfCampuses = getState().campuses.list.concat([campus]);
        dispatch(receiveCampuses(newListOfCampuses));
        hashHistory.push(`/campuses/${campus.id}`)
      });

  };

};
