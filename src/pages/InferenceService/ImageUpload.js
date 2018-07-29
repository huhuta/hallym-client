import React, { Component } from 'react';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilepondPluginImageResize from 'filepond-plugin-image-resize';
import FilepondPluginImageTransform from 'filepond-plugin-image-transform';
import getFilepondServer from './getFilepondServer';

registerPlugin(
  FilepondPluginImageResize,
  FilePondImagePreview,
  FilepondPluginImageTransform,
);

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  render() {
    const { model } = this.props;
    return (
      <div>
        <FilePond
          allowImageResize
          imageResizeTargetWidth={640}
          imageResizeMode="cover"
          maxFiles={1}
          server={getFilepondServer(model)}
        >
          {this.state.files.map((file) => <File key={file} source={file} />)}
        </FilePond>
      </div>
    );
  }
}

export default ImageUpload;
