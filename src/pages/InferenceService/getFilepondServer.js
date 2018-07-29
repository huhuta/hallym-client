import { dispatch } from '../../store';

const getProcessHandler = (model) => async (
  fieldName,
  file,
  metadata,
  load,
  error,
  progress,
  abort,
) => {
  progress(true, 0, 1024);

  const form = new FormData();
  form.append(fieldName, file);

  const { infer } = dispatch.inference;
  infer({ model, form, file });

  return {
    abort: () => {
      abort();
    },
  };
};

export default (model) => ({
  url: null,
  process: getProcessHandler(model),
  fetch: null,
  revert: null,
  load: null,
  restore: null,
});
