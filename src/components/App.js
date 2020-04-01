import React from 'react';
import '../assets/style.css';

import useLocation from './useLocation';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, errorMessage] = useLocation();

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
