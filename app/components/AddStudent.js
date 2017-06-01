import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export default function AddStudent (props) {

  const handleFirstNameChange = props.handleFirstNameChange;
  const handleLastNameChange = props.handleLastNameChange;	
  const handleEmailChange = props.handleEmailChange;
  const handleCampusChange = props.handleCampusChange;
  const handleSubmit = props.handleSubmit;
  const firstName = props.firstName;
  const lastName = props.lastName;
  const email = props.email;
  const camp = props.campusId;
  const campuses = store.getState().campuses;


  return (
    <div className="col-xs-12">
      	<h3 >ADD STUDENT</h3>
      	<form className="form-horizontal" onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="col-xs-12">FirstName:</label>
				<input 
					type="text" 
					className="form-control" 
					id="firstname"
					onChange={handleFirstNameChange}
	            	value={firstName}
				></input>
			</div>
			<div className="form-group">
				<label>LastName:</label>
				<input 
					type="text" 
					className="form-control" 
					id="lastname"
					onChange={handleLastNameChange}
	            	value={lastName}					
				></input>
			</div>
			<div className="form-group">
				<label>Email:</label>
				<input 
					type="text" 
					className="form-control" 
					id="email"
					onChange={handleEmailChange}
	            	value={email}					
				></input>
			</div>
			<div className="form-group">
			    <label>Campus : </label>
			    <select 
			    	id="campus-select" 
			    	onChange={handleCampusChange}
			    	value={camp}>
			    {    
			        campuses && campuses.list.map(campus=>(
			        	<option key={campus.id} value={campus.id}>{campus.name}</option>
			        ))
			    }
			    </select>

			</div>

	  		<button type="submit" className="btn btn-default">Submit</button>
		</form>
    </div>
  );

};