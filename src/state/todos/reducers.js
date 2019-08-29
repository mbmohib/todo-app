import * as types from './types';

const initialState = {
  todoList: [],
  todo: undefined,
};

const uiReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_TODOLIST_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.concat(payload.slice(0, 6)),
      };

    case types.GET_TODO:
      const todo = state.todoList.find(
        todo => todo.id.toString() === payload.id.toString()
      );

      return {
        ...state,
        todo,
      };

    case types.ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(payload.data),
      };

    case types.UPDATE_TODO:
      const todoList = [...state.todoList];
      const todoIndex = todoList.findIndex(
        todo => todo.id.toString() === payload.id.toString()
      );
      const todoItem = {
        ...todoList[todoIndex],
        ...payload.data,
      };
      todoList[todoIndex] = todoItem;

      return {
        ...state,
        todoList,
      };

    case types.CLEAR_TODO:
      return {
        ...state,
        todo: undefined,
      };

    case types.DELETE_TODO:
      const filteredTodoList = state.todoList.filter(
        todo => todo.id.toString() !== payload.id.toString()
      );

      return {
        ...state,
        todoList: filteredTodoList,
      };

    case types.CLEAR_ALL_COMPLETED_TODOS:
      const completedTodoList = state.todoList.filter(
        todo => todo.completed === false
      );

      return {
        ...state,
        todoList: completedTodoList,
      };

    default:
      return state;
  }
};

export default uiReducers;
