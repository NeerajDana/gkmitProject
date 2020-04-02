import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import casesReducers from "./Reducers/cases.reducers";
import { watchAuth } from "./Saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  casesState: casesReducers
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchAuth);

export { store };
