import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { apiMiddleware, isRequestedMiddleware } from 'state/middleware';
import uiReducers from 'state/ui';
import todoReducers from 'state/todos';

const rootReducer = combineReducers({
  ui: uiReducers,
  todos: todoReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, isRequestedMiddleware, apiMiddleware))
);
