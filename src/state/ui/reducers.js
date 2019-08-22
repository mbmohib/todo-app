import * as types from './types';

const initialState = {
  error: null,
  loading: null,
};

const uiReducers = (state = initialState, action) => {
  const { type, error, payload, meta } = action;

  switch (type) {
    case types.SET_ERROR_MESSAGE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default uiReducers;
