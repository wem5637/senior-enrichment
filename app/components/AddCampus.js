import React from 'react';
import {Link} from 'react-router';

export default function AddCampus (props) {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const inputValue = props.inputValue;

  return (
  	<div>
	  	<h3>CREATE CAMPUS</h3>
	    <form className="form-horizontal" onSubmit={handleSubmit}>
		  <div className="form-group">
		    <label>Name:</label>
		    <input 
			    type="name" 
			    className="form-control" 
			    id="name"
			    onChange={handleChange}
	            value={inputValue}
		    ></input>
		  </div>

		  <button type="submit" className="btn btn-default">Submit</button>
		</form>
	</div>
  );

};