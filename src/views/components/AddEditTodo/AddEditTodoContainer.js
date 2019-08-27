import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { todoActions } from 'state/todos';
import AddEditTodo from './AddEditTodo';

const AddEditTodoContainer = ({
  getTodo,
  addTodo,
  updateTodo,
  clearTodo,
  todalTodos,
  todo,
  history,
  match,
}) => {
  useEffect(() => {
    console.log('AddEditTodoContainer: UseEffect');
    const id = match.params.id;

    if (id) {
      getTodo({ id });
    }
    return () => {
      console.log('AddEditTodoContainer: UseEffect Cleanup');
      clearTodo();
    };
  }, [match.params.id]);

  const handleAddTodo = title => {
    if (todo) {
      updateTodo({
        id: todo.id,
        data: {
          title: title,
        },
      });
    } else {
      addTodo({
        data: {
          userId: 1,
          id: todalTodos + 1,
          title: title,
          completed: false,
        },
      });
    }

    history.push('/');
  };

  const handleBackButton = () => {
    history.push('/');
  };

  return (
    <Fragment>
      {console.log('AddEditTodoContainer: Render')}
      <AddEditTodo
        todoTitle={todo && todo.title}
        handleAddTodo={handleAddTodo}
        handleBackButton={handleBackButton}
      />
    </Fragment>
  );
};

const mapStateToProps = ({ todos }) => {
  return {
    todalTodos: todos.todoList.length > 0 ? todos.todoList.length : 6,
    todo: todos.todo,
  };
};

const mapActionsToProps = {
  addTodo: todoActions.addTodo,
  updateTodo: todoActions.updateTodo,
  getTodo: todoActions.getTodo,
  clearTodo: todoActions.clearTodo,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AddEditTodoContainer);
