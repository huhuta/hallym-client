/* eslint-disable import/prefer-default-export */
const { REACT_APP_BACKEND_HOST, REACT_APP_BACKEND_PORT } = process.env;
const backEnd = `http://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}`;

export const inference = {
  state: {
    '5class': { result: {} },
    cancer: { result: {} },
    neoplasm: { result: {} },
  },
  reducers: {
    updateResult: (state, { model, result, file }) => ({
      ...state,
      [model]: { result, file },
    }),
  },
  effects: (dispatch) => ({
    infer: async ({ form, model, file }) => {
      const { updateResult } = dispatch.inference;
      try {
        const response = await fetch(`${backEnd}/infer/${model}`, {
          method: 'post',
          body: form,
        });

        const result = await response.json();
        updateResult({ model, result, file });
      } catch (error) {
        updateResult({
          model,
          result: { error: error.message },
          file,
        });
      }
    },
  }),
};