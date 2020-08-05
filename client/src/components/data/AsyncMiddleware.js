export const asyncAction = () => next => action => {
  Promise.resolve(action.payload).then(result =>
    next({
      ...action,
      payload: result,
    })
  );
};
