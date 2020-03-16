import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    icon: 'massive sun icon'
  },
  winter: {
    text: 'Burr, it is chilly',
    icon: 'massive snowflake icon'
  },
  kuy: {
    text: 'hello'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${icon}`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${icon}`}></i>
    </div>
  );
};

export default SeasonDisplay;
