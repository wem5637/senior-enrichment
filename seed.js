var db = require('./db');
const promise = require('bluebird');

const User = db.models.user;
const Student = db.models.student;
const Campus = db.models.campus;

var promises1 = [];
var promises2 = [];

var data = {

	students: [{firstName: 'Will', lastName: 'McCracken', email:'wem5637@gmail.com'},
					{firstName: 'Bob', lastName: 'Davis', email:'bdavis@gmail.com'},
					{firstName: 'Angus', lastName: 'Rockett', email:'angrockett@gmail.com'},
					{firstName: 'Tobias', lastName: 'Funke', email:'tfunke@gmail.com'},
					{firstName: 'Gob', lastName: 'Bluthe', email:'Gob@gmail.com'},
					{firstName: 'Astroman', lastName: 'Manny', email:'astroman@gmail.com'},
					{firstName: 'Kevin', lastName: 'Surmin', email:'ksurm@gmail.com'}
	],

	campuses: [{name: 'Terra', imageUrl:'http://s2.thingpic.com/images/K4/gbgcVmMdfcKu5KFPvF5zCjTL.jpeg'},
					{name: 'Luna', imageUrl:'http://www.astrogarage.com/site/Portals/10/Moon-Mosaic.jpg'},
					{name: 'Mars', imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg'}
	]

}

for (var i = 0; i < data.campuses.length; ++i) {
    promises1.push(Campus.create(data.campuses[i]))
}

for (var i = 0; i < data.students.length; ++i) {
    promises2.push(Student.create(data.students[i]))
}



db.sync()
.then(function () {
  	console.log("adding campuses");
  	return promise.all(promises1);
})
.then(function (campus) {

	console.log("adding students");
	setTimeout(function(){
		return promise.all(promises2);
	}, 3000)
		
})
.then(function(){
	console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
