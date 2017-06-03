import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './searchbar/searchbar.js';
import MoviePoster from './movie_poster/movie_poster.js';
import _ from 'lodash';


const API_KEY = '2c0adb15cfc22f4aa37121c648eb1c10';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        release_date: "",
        title: "",
        tagline: "",
        vote_average: "",
        revenue: 0,
        runtime: "",
        genres: [],
        production_companies: [],
        budget: 0,
        id: ""
      }
    };
    this.getID = this.getID.bind(this);
  }

  componentDidMount() {
    this.getID('315635');
  }


  getID(id) {
    var self = this;
      fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=2c0adb15cfc22f4aa37121c648eb1c10')
      .then((resp) => resp.json())
      .then(function(data) {
        self.setState({
          data: data,
        });
      });
  }


  render() {
    var data = (this.state.data) ? this.state.data : '';
    const videoSearch = _.debounce((id) => { this.getID(id) }, 400)
    return (
      <div>
        <Searchbar searchChange={videoSearch} />
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
