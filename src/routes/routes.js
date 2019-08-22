import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from 'views/components';
import Layout from 'views/layouts/Layout';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
