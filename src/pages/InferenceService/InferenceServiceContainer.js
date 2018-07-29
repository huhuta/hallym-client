import { connect } from 'react-redux';
import InferenceService from './InferenceService';

const mapState = (state) => ({
  inference: state.inference,
});

const mapDispatch = (dispatch) => ({
  inference: dispatch.inference,
});

const mergeProps = (propsFromState, propsFromDispatch, { model }) => ({
  inference: { ...propsFromState.inference, ...propsFromDispatch.inference },
  model,
});

export default connect(
  mapState,
  mapDispatch,
  mergeProps,
)(InferenceService);
