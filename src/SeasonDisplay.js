import React from 'react';

const SeasonDisplay = props => {
  return (
    <div>
      <ul>
        <li>Latitude: {props.latitude}</li>
        <li>Longitude: {props.longitude}</li>

        <li>Error: {props.error}</li>
      </ul>
    </div>
  );
};

export default SeasonDisplay;
