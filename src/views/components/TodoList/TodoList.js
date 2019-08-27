import React, { Fragment } from 'react';

import { TodoItem } from 'views/components';

const TodoList = ({ todos }) => {
  return (
    <Fragment>
      {todos.length > 0 &&
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </Fragment>
  );
};

export default TodoList;
