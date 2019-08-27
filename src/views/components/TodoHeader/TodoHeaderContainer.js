import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TodoHeader from './TodoHeader';
import { todoActions } from 'state/todos';

const TodoHeaderContainer = ({
  todalTodos,
  location,
  clearAllCompletedTodos,
}) => {
  const handleClearAllTodos = () => {
    clearAllCompletedTodos();
  };

  return (
    <TodoHeader
      todalTodos={todalTodos}
      hideAddButton={
        location.pathname.includes('add') || location.pathname.includes('edit')
      }
      handleClearAllTodos={handleClearAllTodos}
    />
  );
};

const mapStateToProps = ({ todos }) => {
  return {
    todalTodos: todos.todoList.length,
  };
};

const mapActionsToProps = {
  clearAllCompletedTodos: todoActions.clearAllCompletedTodos,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(TodoHeaderContainer));
