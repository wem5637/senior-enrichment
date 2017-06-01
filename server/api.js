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

	Campus.findAll({

	})
	.then(function(campuses){
		res.json(campuses)
	})

})

api.get('/campuses/:campusId', (req, res) => {

	Campus.findOne({
		where:{
			id: req.params.campusId
		}
	})
	.then(function(campus){
		res.json(campus)
	})

})


api.get('/students', (req, res) => {

	Student.findAll({
		include: [Campus]
	})
	.then(function(students){
		res.json(students)
	})

})

api.get('/students/:studentId', (req, res) => {

	Student.findOne({
		where:{
			id: req.params.studentId

		},
		include: [Campus]
	})
	.then(function(students){
		res.json(students)
	})

})


api.post('/campuses', (req, res, next) => {

	Campus.create(req.body)
	.then(campus => res.status(201).json(campus))
  	.catch(next);

})

api.post('/students', (req, res, next) => {

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


api.delete('/campuses/:campusId', (req, res) => {

	Campus.destroy({
		where:{
			id:req.params.campusId
		}
	})
	.then(function(rows){
		return Campus.findAll();
	})
	.then((campuses)=>{
		res.status(201).json(campuses)
	})
	
})

api.delete('/students/:studentId', (req, res) => {

	Student.destroy({
		where:{
			id:req.params.studentId
		}
	})
	.then(function(rows){
		return Student.findAll();
	})
	.then((students)=>{
		res.status(201).json(students)
	})
	
})

module.exports = api