import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes/routes';
import Theme from 'theme';
import store from 'state/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Theme>
          <Routes />
        </Theme>
      </Provider>
    );
  }
}

export default App;
