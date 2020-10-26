import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { RootState } from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/RootSaga';
import { routerMiddleware } from 'react-router-redux';
import history from '../history';
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState: RootState) => {
  const routeMiddleware = routerMiddleware(history);
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(routeMiddleware, sagaMiddleware, reduxImmutableStateInvariant()),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
