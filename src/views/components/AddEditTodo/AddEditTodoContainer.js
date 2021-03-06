import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import { todoActions } from 'state/todos';
const AddEditTodo = lazy(() => import('./AddEditTodo'));

const AddEditTodoContainer = ({
  getTodo,
  addTodo,
  updateTodo,
  clearTodo,
  todo,
  history,
  match,
}) => {
  useEffect(() => {
    const id = match.params.id;

    if (id) {
      getTodo({ id });
    }
    return () => {
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
          id: Math.random()
            .toString(36)
            .substr(2, 9),
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
    <Suspense fallback={<div>Loading...</div>}>
      <AddEditTodo
        todoTitle={todo && todo.title}
        handleAddTodo={handleAddTodo}
        handleBackButton={handleBackButton}
      />
    </Suspense>
  );
};

const mapStateToProps = ({ todos }) => {
  return {
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
