import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
// import rootReducer from './modules';

const rootReducer = () => ({});

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable no-underscore-dangle */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default () => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
  );

  // enable hot reload
  // if (process.env.NODE_ENV !== 'production') {
  //   if (module.hot) {
  //     module.hot.accept('./modules', () => {
  //       store.replaceReducer(rootReducer);
  //     });
  //   }
  // }

  return store;
};
