import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const MovieInfo = (props) => {

  return (
    <div className="description-container">
      <div className="title">
        <h1>{props.data.title}</h1>
        <h3>{props.data.tagline}</h3>

      </div>
      <div>
        <h4>Release Date: {props.data.release_date}</h4>
        <h4>Rating: {props.data.vote_average}/10</h4>
        <h4>Revenue: ${props.data.revenue}</h4>
        <h4>Runtime: {props.data.runtime} min</h4>
      </div>
      <div>
        <h4>Overview</h4>
        <p>{props.data.overview}</p>
      </div>
    </div>
  );

};

export default MovieInfo;
