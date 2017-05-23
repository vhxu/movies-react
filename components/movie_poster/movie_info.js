import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="description-container">
        <div className="title">
          <h1 style={{color:"#01d277"}}>{this.props.data.title} ({this.props.data.release_date.substr(0,4)})</h1>
          <h2 style={{color:"white"}}>{this.props.data.tagline}</h2>
          <h3 style={{color:"#01d277"}}>{this.props.data.genres.map((genre, i) => <span key={i} className="genres">{genre.name}  </span>)}</h3>

        </div>
        <div>
          <p style={{color:"white"}}>{this.props.data.overview}</p>

        </div>
        <div>
          <div className="first-row">
            <div>
              <h3 style={{color:"#01d277"}}>Rating</h3>
              <h4 style={{color:"white"}}>{this.props.data.vote_average}/10</h4>
            </div>
            <div>
              <h3 style={{color:"#01d277"}}>Runtime</h3>
              <h4 style={{color:"white"}}>{this.props.data.runtime} min</h4>
            </div>
          </div>
          <div className = "second-row">
            <div>
              <h3 style={{color:"#01d277"}}>Budget</h3>
              <h4 style={{color:"white"}}>${this.props.data.budget.toLocaleString()}</h4>
            </div>
            <div>
              <h3 style={{color:"#01d277"}}>Revenue</h3>
              <h4 style={{color:"white"}}>${this.props.data.revenue.toLocaleString()}</h4>
            </div>
          </div>
          <h3 style={{color:"#01d277"}}>Production Companies</h3>
          <h4 style={{color:"white"}}>{this.props.data.production_companies.map((companies, i) => <span key={i} className="companies">{companies.name}  </span>)}</h4>
        </div>
      </div>
    );
  }
};


export default MovieInfo;
