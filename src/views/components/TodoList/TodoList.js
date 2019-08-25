import React from 'react';
import { TodoItem } from 'views/components';

const TodoList = () => {
  return (
    <div>
      <TodoItem todo="Meeting with John Doe" />
      <TodoItem todo="Meeting with John DoeMeeting with John Doe" />
    </div>
  );
};

export default TodoList;
