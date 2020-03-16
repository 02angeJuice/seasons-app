import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/style.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorPage from './ErrorPage';

class App extends Component {
  // THIS IS THE ONLY TIME TO DO DIRECT ASSIGNMENT
  // to this.state / state
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // Called this.setState
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <ErrorPage error={this.state.errorMessage} />;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }

    return <Spinner message="Please accept location request." />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
