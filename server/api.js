'use strict'
const api = require('express').Router()
const db = require('../db')

const User = db.models.user;
const Student = db.models.student;
const Campus = db.models.campus;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/campuses', (req, res) => {

	res.json({ok:"campuses"});

})

api.get('/campuses/:campusId', (req, res) => {

	res.send({hello: 'campusid'})

})


api.get('/students', (req, res) => {

	res.send({hello: 'all students'})

})

api.get('/students/:studentId', (req, res) => {

	res.send({hello: 'student by id'})

})


api.post('/campuses', (req, res, next) => {

	Campus.create(req.body)
	.then(campus => res.status(201).json(campus))
  	.catch(next);

})

api.post('/students', (req, res, next) => {
	console.log(req.body);
	Student.create(req.body)
	.then(student => res.status(201).json(student))
  	.catch(next);
	
})



api.put('/campuses/:campusId', (req, res) => {

	res.send({hello: 'campus update'})
	
})

api.put('/students/:studentId', (req, res) => {

	res.send({hello: 'student update'})
	
})


api.delete('/campuses', (req, res) => {

	res.send({hello: 'campus delete'})
	
})

api.delete('/students', (req, res) => {

	res.send({hello: 'student delete'})
	
})

module.exports = api