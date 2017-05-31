'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

import store from './store'
import Root from './components/Root'
import App from './components/App'
import CampusesContainer from './containers/CampusesContainer'
import CampusContainer from './containers/CampusContainer'
import StudentsContainer from './containers/StudentsContainer'
import StudentContainer from './containers/StudentContainer'



render (
<Provider store={store}>
	<Router history={hashHistory}>
	    <Route path="/" component={App}>
	    	<Route path="/root" component={Root}/>
	    	<Route path="/campuses" component={CampusesContainer}/>
	    	<Route path="/campuses/:campusId" component={CampusContainer}/>
	    	<Route path="/students" component={StudentsContainer}/>
	    	<Route path="/students/:studentId" component={StudentContainer}/>	    	
	    	<IndexRedirect to="/root"/>
	    </Route>
	</Router>
</Provider>,
  document.getElementById('main')
)