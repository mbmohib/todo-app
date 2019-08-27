import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { todoActions } from 'state/todos';
import { Error } from 'views/ui';
import TodoList from './TodoList';

const TodoListContainer = ({ fetchTodoList, todos, loading, error }) => {
  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return (
    <Fragment>
      {error ? <Error /> : <TodoList todos={todos} loading={loading} />}
    </Fragment>
  );
};

const mapStateToProps = ({ ui, todos }) => {
  return {
    todos: todos.todoList,
    loading: ui.loading.todos,
    error: ui.error,
  };
};

const mapActionsToProps = {
  fetchTodoList: todoActions.fetchTodoList,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoListContainer);
