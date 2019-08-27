/**
 * Check if that API already requested, if not requested
 * pass to the next middleware
 *
 * @param {*} { dispatch, getState }
 */
const isRequestedMiddleware = ({ dispatch, getState }) => next => action => {
  const state = getState();

  const isRequestedType = state.ui.isRequested;

  if (!(action.type in isRequestedType)) {
    next(action);
  }
};

export default isRequestedMiddleware;
