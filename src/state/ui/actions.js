import * as types from './types';

export const setErrorMessage = ({ data }) => {
  return {
    type: types.SET_ERROR_MESSAGE,
    payload: {
      url: '',
      method: 'GET',
      data,
    },
    meta: {
      jwt: true,
      analytics: true,
    },
  };
};
