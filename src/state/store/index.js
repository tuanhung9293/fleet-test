import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';

const middlewares = [
  logger
];

const isDev = process.env.NODE_ENV === 'development';

const composeEnhancers =
  (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

function createBaseStore(initialState = {}) {
  return createStore(
    rootReducer,
    {
      ...initialState
    },
    composeEnhancers(applyMiddleware(...middlewares))
  )
}

const store = createBaseStore();

export default store;
