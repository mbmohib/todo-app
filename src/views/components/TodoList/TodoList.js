import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { TodoItem } from 'views/components';

const TodoList = ({ todos }) => {
  return (
    <Fragment>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
    </Fragment>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
