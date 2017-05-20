import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Searchbar extends Component {
  render() {
    return (
      <div className="top">
        <div className = "logo">
          <img src= {'https://www.themoviedb.org/assets/static_cache/23e473036b28a59bd5dcfde9c671b1c5/images/v4/logos/312x276-primary-green.png'} />
        </div>
        <div className="search">
          <input placeholder="Search..." />
        </div>
      </div>
      );
  }
}

export default Searchbar;
