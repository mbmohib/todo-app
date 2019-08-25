import React, { Fragment } from 'react';
import { TodoHeader, TodoList } from 'views/components';

const Home = () => (
  <Fragment>
    <TodoHeader />
    <TodoList />
  </Fragment>
);

export default Home;
