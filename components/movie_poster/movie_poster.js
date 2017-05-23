import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MovieInfo from './movie_info.js'

class MoviePoster extends Component {

  render() {
    return (
      <div className="movie-poster">
        <div className="poster">
          <img src={'https://image.tmdb.org/t/p/w500' + this.props.info.poster_path} />
        </div>
        <div className="description">
          <MovieInfo data={this.props.info} />
        </div>
      </div>
    );
  }
  componentDidUpdate() {
    document.body.style.backgroundImage = 'url(' + 'https://image.tmdb.org/t/p/original' + this.props.info.backdrop_path + ')';
  }
}

export default MoviePoster;
