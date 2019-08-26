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

export const addTodo = ({ id, data }) => {
  return {
    type: types.ADD_TODO,
    payload: {
      id,
      data,
    },
  };
};

export const editTodo = ({ id, data }) => {
  return {
    type: types.EDIT_TODO,
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

export const setCheckbox = ({ id, data }) => {
  return {
    type: types.SET_CHECKBOX,
    payload: {
      id,
      data,
    },
  };
};
