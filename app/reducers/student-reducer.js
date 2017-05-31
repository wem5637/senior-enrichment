import {
  RECEIVE_STUDENTS,
  RECEIVE_STUDENT,
  REMOVE_STUDENT
} from '../constants';

import store from '../store';

const initialStudentsState = {
  selected: {},
  list: []
};

export default function (state = initialStudentsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_STUDENTS:
      newState.list = action.students;
      break;

    case RECEIVE_STUDENT:
      newState.selected = action.student;
      break;

    case REMOVE_STUDENT:
      newState.list=store.getState().students.list.filter(student=>student.id!==action.id);
      break;

    default:
      return state;

  }
  return newState;

}