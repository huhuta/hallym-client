import React, { Component } from 'react';

const UploadedImage = ({ file }) => {
  if (!file) {
    return <div />;
  }
  return <img src={window.URL.createObjectURL(file)} alt="" />;
};

const resultFormatter = (result) => (key) => {
  let value = result[key];
  if (typeof value === 'number') {
    value = `${(value * 100).toFixed(2)}%`;
  }
  return (
    <p key={key}>
      {key}: <strong className="text-primary">{value}</strong>
    </p>
  );
};

class InferenceResult extends Component {
  render() {
    // TODO Fix me! Tricky...
    const { model, inference } = this.props;
    const { file, result } = inference[model];
    const { name } = file || {};
    return (
      <div>
        <h2>{model} classification:</h2>
        <h5>file name: {name}</h5>
        {Object.keys(result).map(resultFormatter(result))}
        <UploadedImage file={file} />
      </div>
    );
  }
}

export default InferenceResult;
