import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import './assets/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME TO DO DIRECT ASSIGNMENT
    // to this.state
    this.state = {
      lat: null,
      lon: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // Called this.setState
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      error => {
        this.setState({
          errorMessage: error.message
        });
      }
    );
  }

  render() {
    return (
      <div>
        <SeasonDisplay
          latitude={this.state.lat}
          longitude={this.state.lon}
          error={this.state.errorMessage}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
