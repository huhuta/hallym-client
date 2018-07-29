import React, { Component } from 'react';
import ImageUpload from './ImageUpload';
import InferenceResult from './InferenceResult';

class InferenceService extends Component {
  render() {
    return (
      <React.Fragment>
        <ImageUpload {...this.props} />
        <InferenceResult {...this.props} />
      </React.Fragment>
    );
  }
}

export default InferenceService;
