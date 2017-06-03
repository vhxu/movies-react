import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  getdata(term) {
    var self = this;
      fetch('https://api.themoviedb.org/3/search/movie?api_key=2c0adb15cfc22f4aa37121c648eb1c10&query='+term)
      .then((resp) => resp.json())
      .then(function(movie) {
        const id = movie.results[0].id;
        console.log(id);
        self.props.searchChange(id);
      });
    }

  render() {
    return (
      <div className="top">
        <div className = "logo">
          <img src= {'https://www.themoviedb.org/assets/static_cache/23e473036b28a59bd5dcfde9c671b1c5/images/v4/logos/312x276-primary-green.png'} />
        </div>
        <div className="search">
          <input
            placeholder="Search Movie"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}/>
        </div>
      </div>
      );
  }
  onInputChange(term) {
    this.setState({term});
    this.getdata(term);
  }
}

export default Searchbar;
