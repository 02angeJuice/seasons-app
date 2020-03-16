import React from 'react';

const ErrorPage = props => {
  return (
    <div className="error-page">
      <div className="ui piled segment">
        <h4 className="ui header">Error</h4>
        <p>{props.error}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
