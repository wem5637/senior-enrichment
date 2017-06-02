import React from 'react';
import {Link} from 'react-router';

export default function AddCampus (props) {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const inputValue = props.inputValue;

  return (
  	<div className="col-xs-12">
	  	<h3 className="col-xs-12">ADD CAMPUS</h3>
	    <form className="form-horizontal" onSubmit={handleSubmit}>
		  <div className="form-group">
		    <label className="col-xs-12">Name:</label>
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