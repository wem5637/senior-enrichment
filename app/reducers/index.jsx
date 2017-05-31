import { combineReducers } from 'redux'
import campusesReducer from './campus-reducer'
import studentsReducer from './student-reducer'


export default combineReducers({
	campuses: campusesReducer,
	students: studentsReducer
})

