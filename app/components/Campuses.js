import React from 'react';
import store from '../store';
import {Link} from 'react-router';
import {removeCampus} from '../action-creators/campus'

export default function Campuses (props) {

	const campuses = props.campuses;
  
  return (
    <div className="col-xs-12">
      <h3>ALL CAMPUSES</h3>
      {
      	campuses && campuses.map(campus =>(
            <div className="col-xs-4" key={ campus.id }>
              <Link className="media-body thumbnail" to={`/campuses/${campus.id}`}>
                <img src={campus.imageUrl}/>
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                </div>
              </Link>
              <div className="media-right media-middle">
                <button className="btn btn-default"
                        onClick={()=>store.dispatch(removeCampus(campus.id))}>
                  X
                </button>
              </div>
            </div>      		
      	))
      }
    </div>
  );

};