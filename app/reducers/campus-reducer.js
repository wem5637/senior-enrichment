import {
  RECEIVE_CAMPUSES,
  RECEIVE_CAMPUS,
  REMOVE_CAMPUS
} from '../constants';

import store from '../store';

const initialCampusesState = {
  selected: {},
  list: []
};

export default function (state = initialCampusesState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_CAMPUSES:
      newState.list = action.campuses;
      break;

    case RECEIVE_CAMPUS:
      newState.selected = action.campus;
      break;

    case REMOVE_CAMPUS:
      newState.list=store.getState().campuses.list.filter(campus=>campus.id!==action.id);
      break;

    default:
      return state;
  }
  return newState;

}