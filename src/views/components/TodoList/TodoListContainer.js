import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { todoActions } from 'state/todos';
import TodoList from './TodoList';

const TodoListContainer = ({ fetchTodoList, todos, loading }) => {
  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return <TodoList todos={todos} loading={loading} />;
};

const mapStateToProps = ({ ui, todos }) => {
  return {
    loading: ui.loading.todos,
    todos: todos.todoList,
  };
};

const mapActionsToProps = {
  fetchTodoList: todoActions.fetchTodoList,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoListContainer);
