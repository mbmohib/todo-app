import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import TodoList from 'views/components/TodoList/TodoListContainer';
import Layout from 'views/layouts/Layout';

const FourOFour = lazy(() => import('../views/components/FourOFour/FourOFour'));

const AddEditTodo = lazy(() =>
  import('../views/components/AddEditTodo/AddEditTodoContainer')
);

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={TodoList} exact />
        <Route path="/add" component={WaitingComponent(AddEditTodo)} />
        <Route path="/edit/:id" component={WaitingComponent(AddEditTodo)} />
        <Route component={WaitingComponent(FourOFour)} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
