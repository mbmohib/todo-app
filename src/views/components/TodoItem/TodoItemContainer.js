import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { todoActions } from 'state/todos';
import TodoItem from './TodoItem';

const TodoItemContainer = ({ todo, updateTodo, deleteTodo }) => {
  useEffect(() => {
    // console.log('TodoItemContainer: UseEffect');
  });

  const hanldeTodoDelete = () => {
    deleteTodo({ id: todo.id });
  };

  const handleCheckboxChange = () => {
    updateTodo({
      id: todo.id,
      data: {
        completed: !todo.completed,
      },
    });
  };

  return (
    <TodoItem
      todo={todo}
      hanldeTodoDelete={hanldeTodoDelete}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

const mapActionsToProps = {
  deleteTodo: todoActions.deleteTodo,
  updateTodo: todoActions.updateTodo,
};

export default connect(
  null,
  mapActionsToProps
)(TodoItemContainer);
