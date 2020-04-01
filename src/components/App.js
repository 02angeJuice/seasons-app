import React, { useState, useEffect } from 'react';
import '../assets/style.css';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  let content;
  if (errorMessage) {
    content = `${errorMessage}`;
  } else if (lat) {
    content = <SeasonDisplay latitude={lat} />;
  } else {
    content = <Spinner message="Please accept location request." />;
  }

  return <>{content}</>;
};

export default App;
