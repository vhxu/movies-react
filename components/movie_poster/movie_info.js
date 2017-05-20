import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MovieInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.title}</h2>
        </div>
        <div>
          <h4>Release Date: {this.props.release}</h4>
          <h4>Rating: {this.props.rating}</h4>
        </div>
        <div>
          <p>{this.props.overview}</p>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
