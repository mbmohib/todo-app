import axios from 'axios';
import config from 'config';
import * as errorTypes from 'state/ui/types';
import { uiActions } from 'state/ui';

const env = process.env.NODE_ENV || 'development';

const apiMiddleware = ({ dispatch }) => next => action => {
  const baseUrl = `${config[env].baseUrl}`;
  next(action);

  const { API, label } = action.meta || {};
  const { path, method = 'GET', data } = action.payload || {};

  if (!API) {
    return;
  }

  if (API && !path) {
    throw new Error(`'path' not specified for api action ${action.type}`);
  }

  const url = baseUrl + path;

  dispatch(uiActions.fetchingStart(label));

  return axios({ method, url, data })
    .then(res => {
      next({
        type: `${action.type}_completed`,
        payload: res.data,
        meta: action.meta,
      });
      dispatch(uiActions.fetchingEnd(label));
    })
    .catch(err => {
      next({
        type: errorTypes.SET_ERROR_MESSAGE,
        payload: err,
        meta: action.meta,
      });
      dispatch(uiActions.fetchingEnd(label));
    });
};

export default apiMiddleware;
