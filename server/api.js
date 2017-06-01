'use strict'
const api = require('express').Router()
const db = require('../db')

const User = db.models.user;
const Student = db.models.student;
const Campus = db.models.campus;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/campuses', (req, res, next) => {

	Campus.findAll({

	})
	.then(function(campuses){
		res.status(200).json(campuses)
	})
	.catch(next);

})

api.get('/campuses/:campusId', (req, res, next) => {

	Campus.findOne({
		where:{
			id: req.params.campusId
		}
	})
	.then(function(campus){
		res.status(200).json(campus)
	})
	.catch(next);
})


api.get('/students', (req, res, next) => {

	Student.findAll({
		include: [Campus]
	})
	.then(function(students){
		res.status(200).json(students)
	})
	.catch(next);

})

api.get('/students/:studentId', (req, res, next) => {

	Student.findOne({
		where:{
			id: req.params.studentId

		},
		include: [Campus]
	})
	.then(function(students){
		res.status(200).json(students)
	})
	.catch(next);
})


api.post('/campuses', (req, res, next) => {

	Campus.create(req.body)
	.then(campus => {
		return Campus.findOne({
			where:{
				id: campus.id
			}
		})
	})
	.then(function(campus){

		res.status(201).json(campus)
	})
  	.catch(next);

})

api.post('/students', (req, res, next) => {

	Student.create(req.body)
	.then(student => {
		return Student.findOne({
			where:{
				id: student.id
			},
			include: [Campus]
		})
	})
	.then(function(student){

		res.status(201).json(student)
	})
  	.catch(next);
	
})



api.put('/campuses/:campusId', (req, res, next) => {

	Campus.findOne({
		where:{
			id: req.params.campusId
		}
	})
	.then(function(campus){
		campus.update(req.body);
	})
	.then(function(camp){
		
		res.sendStatus(204)
	})
	.catch(next);
	
})

api.put('/students/:studentId', (req, res, next) => {

	Student.findOne({
		where:{
			id: req.params.studentId
		}
	})
	.then(function(student){
		return student.update(req.body);
	})
	.then(function(){
		return Student.findOne({
			where:{
				id: req.params.studentId
			}
		});
	})
	.then(function(student){
		console.log(student)
		res.status(204).json(student)
	})
	.catch(next);

})


api.delete('/campuses/:campusId', (req, res, next) => {

	Campus.destroy({
		where:{
			id:req.params.campusId
		}
	})
	.then(function(rows){
		return Campus.findAll();
	})
	.then((campuses)=>{
		res.status(202).json(campuses)
	})
	.catch(next);
	
})

api.delete('/students/:studentId', (req, res, next) => {

	Student.destroy({
		where:{
			id:req.params.studentId
		}
	})
	.then(function(rows){
		return Student.findAll();
	})
	.then((students)=>{
		res.status(202).json(students)
	})
	.catch(next);
	
})

module.exports = api