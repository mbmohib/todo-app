import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { todoActions } from 'state/todos';
import { TodoSkeletons } from 'views/ui';
import TodoList from './TodoList';
import { Fetcher } from 'utils';

const TodoListContainer = ({ fetchTodoList, todos }) => {
  return (
    <Fragment>
      <Fetcher
        fetchData={fetchTodoList}
        preLoader={<TodoSkeletons times={6} />}
      >
        {() => <TodoList todos={todos} />}
      </Fetcher>
    </Fragment>
  );
};

const mapStateToProps = ({ todos }) => {
  return {
    todos: todos.todoList,
  };
};

const mapActionsToProps = {
  fetchTodoList: todoActions.fetchTodoList,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoListContainer);
