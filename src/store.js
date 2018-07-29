import { init } from '@rematch/core';
import * as models from './models';

const store = init({
  models,
});

export const { getState, dispatch } = store;
export default store;
