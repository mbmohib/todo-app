import axios from 'axios';
import config from 'config';
import * as errorTypes from 'state/ui/types';
import { uiActions } from 'state/ui';

/**
 * API Middleware
 * For handling all all API request
 *
 * @param {*} { dispatch, getState }
 */
const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  const env = process.env.NODE_ENV || 'development';
  const baseUrl = `${config[env].baseUrl}`;
  const { API, label } = action.meta || {};
  const { path, method = 'GET', data } = action.payload || {};

  if (!API) {
    return;
  }

  if (API && !path) {
    throw new Error(`'path' not specified for api action ${action.type}`);
  }

  const url = baseUrl + path;

  // Notify request start with passing "label"
  // for handling multiple loading spinner
  dispatch(uiActions.fetchingStart(label));

  return axios({ method, url, data })
    .then(res => {
      next({
        type: `${action.type}_completed`,
        payload: res.data,
        meta: action.meta,
      });

      // Store request type after successful
      dispatch(uiActions.trackApiRequest(action.type));

      // Notify request finished
      dispatch(uiActions.fetchingEnd(label));
    })
    .catch(err => {
      next({
        type: errorTypes.SET_ERROR_MESSAGE,
        payload: err,
        meta: action.meta,
      });

      // Notify request finished
      dispatch(uiActions.fetchingEnd(label));
    });
};

export default apiMiddleware;
