import * as types from './types';

export const fetchTodoList = () => {
  return {
    type: types.FETCH_TODOLIST,
    payload: {
      path: `todos/`,
      method: 'GET',
    },
    meta: {
      API: true,
      label: 'todos',
    },
  };
};

export const getTodo = ({ id }) => {
  return {
    type: types.GET_TODO,
    payload: {
      id,
    },
  };
};

export const addTodo = ({ data }) => {
  return {
    type: types.ADD_TODO,
    payload: {
      data,
    },
  };
};

export const updateTodo = ({ id, data }) => {
  return {
    type: types.UPDATE_TODO,
    payload: {
      id,
      data,
    },
  };
};

export const deleteTodo = ({ id }) => {
  return {
    type: types.DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const clearTodo = () => {
  return {
    type: types.CLEAR_TODO,
  };
};

export const clearAllCompletedTodos = () => {
  return {
    type: types.CLEAR_ALL_COMPLETED_TODOS,
  };
};
