import * as types from './types';

const initialState = {
  error: null,
  loading: {
    todos: true,
  },
  isRequested: {},
};

const uiReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_ERROR_MESSAGE:
      return {
        ...state,
        error: payload.message,
      };
    case types.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        error: payload,
      };
    case types.FETCHING_START:
      return {
        ...state,
        loading: {
          ...state.loading,
          [payload.label]: true,
        },
      };
    case types.FETCHING_END:
      return {
        ...state,
        loading: {
          ...state.loading,
          [payload.label]: false,
        },
      };

    case types.TRACKAPIREQUEST:
      return {
        ...state,
        isRequested: {
          ...state.isRequested,
          [payload.type]: true,
        },
      };
    default:
      return state;
  }
};

export default uiReducers;
