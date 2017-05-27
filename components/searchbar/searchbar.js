import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';

const getSuggestion = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : this.props.data.title.filter(title =>
  title.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = suggestion => suggestion.title;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.title}
  </div>
);

class Searchbar extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  };

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested({value}) {
    this.setState({
      suggestions:getSuggestions(value)
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type Movie Name",
      value,
      onChange: this.onChange
    };
    return (
      <div className="top">
        <div className = "logo">
          <img src= {'https://www.themoviedb.org/assets/static_cache/23e473036b28a59bd5dcfde9c671b1c5/images/v4/logos/312x276-primary-green.png'} />
        </div>
        <div className="search">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            />
        </div>
      </div>
    );
  }
}


// class Searchbar extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {term: ''};
//   }
//   render() {
//     return (
//       <div className="top">
//         <div className = "logo">
//           <img src= {'https://www.themoviedb.org/assets/static_cache/23e473036b28a59bd5dcfde9c671b1c5/images/v4/logos/312x276-primary-green.png'} />
//         </div>
//         <div className="search">
//           <input
//             value={this.state.term}
//             onChange={event => this.onInputChange(event.target.value)}/>
//         </div>
//       </div>
//       );
//   }
//   onInputChange(term) {
//     this.setState({term});
//     this.props.searchChange(term);
//   }
// }

export default Searchbar;
