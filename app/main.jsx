'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

import axios from 'axios';
import store from './store'
import Root from './components/Root'
import App from './components/App'
import CampusesContainer from './containers/CampusesContainer'
import CampusContainer from './containers/CampusContainer'
import StudentsContainer from './containers/StudentsContainer'
import StudentContainer from './containers/StudentContainer'
import AddCampusContainer from './containers/AddCampusContainer'
import AddStudentContainer from './containers/AddStudentContainer'

import {receiveStudents, getStudentById} from './action-creators/student';
import {receiveCampuses, getCampusById} from './action-creators/campus';

const onAppEnter = function () {

  Promise.all([
    axios.get('/api/students'),
    axios.get('/api/campuses'),
    
  ])
    .then(responses => responses.map(r => r.data))
    .then(([students, campuses]) => {
      store.dispatch(receiveStudents(students));
      store.dispatch(receiveCampuses(campuses));
    });

};

const onStudentEnter = function (nextRouterState){
	const studentId = nextRouterState.params.studentId;
	store.dispatch(getStudentById(studentId))
}

const onCampusEnter = function (nextRouterState){
	const campusId = nextRouterState.params.campusId;
	store.dispatch(getCampusById(campusId))
}

render (
<Provider store={store}>
	<Router history={hashHistory}>
	    <Route path="/" component={App} onEnter={onAppEnter}>
	    	<Route path="/root" component={Root}/>
	    	<Route path="/campuses" component={CampusesContainer}/>
	    	<Route path="/campuses/:campusId" component={CampusContainer} onEnter={onCampusEnter}/>
	    	<Route path="/students" component={StudentsContainer}/>
	    	<Route path="/students/:studentId" component={StudentContainer} onEnter={onStudentEnter}/>
	    	<Route path="/addcampus" component={AddCampusContainer}/>
	    	<Route path="/addstudent" component={AddStudentContainer}/>	
	    	<IndexRedirect to="/root"/>
	    </Route>
	</Router>
</Provider>,
  document.getElementById('main')
)