import * as types from './types';

const initialState = {
  todoList: [],
};

const uiReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_TODOLIST_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.concat(payload.slice(0, 6)),
      };
    case types.ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          id: payload.id,
          ...payload.data,
        }),
      };
    default:
      return state;
  }
};

export default uiReducers;
