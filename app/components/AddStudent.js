import React from 'react';
import {Link} from 'react-router';

export default function AddStudent (props) {

  const handleFirstNameChange = props.handleFirstNameChange;
  const handleLastNameChange = props.handleLastNameChange;	
  const handleEmailChange = props.handleEmailChange;
  const handleSubmit = props.handleSubmit;
  const firstName = props.firstName;
  const lastName = props.lastName;
  const email = props.email;

  return (
    <div>
      	<h3>ADD STUDENT VIEW</h3>
      	<form className="form-horizontal" onSubmit={handleSubmit}>
			<div className="form-group">
				<label>FirstName:</label>
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

	  		<button type="submit" className="btn btn-default">Submit</button>
		</form>
    </div>
  );

};