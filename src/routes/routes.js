import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { TodoList, AddEditTodo, FourOFour } from 'views/components';
import Layout from 'views/layouts/Layout';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={TodoList} exact />
        <Route path="/add" component={AddEditTodo} />
        <Route path="/edit/:id" component={AddEditTodo} />
        <Route component={FourOFour} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
