import React, { Fragment } from 'react';
import { TodoItem } from 'views/components';
import { TodoSkeletons } from 'views/ui';

const TodoList = ({ todos, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <TodoSkeletons times={8} />
      ) : (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
    </Fragment>
  );
};

export default TodoList;
