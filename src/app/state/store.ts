import { Action, applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk, { ThunkAction } from 'redux-thunk';
import * as reducers from './ducks';

const rootReducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({});

const configureStore = (): Store => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
};

export default configureStore;

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
