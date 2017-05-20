import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MovieInfo from './movie_info.js'

class MoviePoster extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={'https://image.tmdb.org/t/p/w300' + this.props.info.poster_path} />
        </div>
        <div>
          <MovieInfo title={this.props.info.title} release={this.props.info.release_date} rating={this.props.info.vote_average} overview={this.props.info.overview} />
        </div>
      </div>
    );
  }
}

export default MoviePoster;
