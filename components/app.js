import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './searchbar/searchbar.js';
import MoviePoster from './movie_poster/movie_poster.js';


const API_KEY = '2c0adb15cfc22f4aa37121c648eb1c10';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
    this.getdata = this.getdata.bind(this);
  }

  getdata() {
    var self = this;
      fetch('https://api.themoviedb.org/3/search/movie?api_key=2c0adb15cfc22f4aa37121c648eb1c10&query=Jack+Reacher')
      .then((resp) => resp.json())
      .then(function(data) {
        self.setState({
          data: data
        })
    });
  }

  componentDidMount() {
    this.getdata();
  }

  //this.state.data.results[0].overview

  render() {
    var data = (this.state.data) ? this.state.data.results[0] : '';
    return (
      <div>
        <Searchbar />
        <MoviePoster info={data} />

      </div>
      );
  }
}


ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
)