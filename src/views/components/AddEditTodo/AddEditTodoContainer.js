import React from 'react';
import { connect } from 'react-redux';

import { todoActions } from 'state/todos';
import AddEditTodo from './AddEditTodo';

const AddEditTodoContainer = ({ addTodo, todalTodos, history }) => {
  const handleAddTodo = todo => {
    addTodo({
      id: todalTodos + 1,
      data: {
        title: todo,
        userId: 1,
        completed: false,
      },
    });

    history.goBack();
  };

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <AddEditTodo
      handleAddTodo={handleAddTodo}
      handleBackButton={handleBackButton}
    />
  );
};

const mapStateToProps = ({ todos }) => {
  return {
    todalTodos: todos.todoList ? todos.todoList.length : 7,
  };
};

const mapActionsToProps = {
  addTodo: todoActions.addTodo,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AddEditTodoContainer);
