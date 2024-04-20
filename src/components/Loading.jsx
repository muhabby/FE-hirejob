import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color, height, width }) => {
  return (
    <div className="loading">
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
};

const LoadingText = ({ type, color, height, width }) => {
  return (
    <div className="loading">
      <ReactLoading type={type} color={color} height={height} width={width} />
      <div className="text-loading">Loading Data</div>
    </div>
  );
};

export { Loading, LoadingText };
