import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
  import loggingMiddleware from 'redux-logger';
  import thunkMiddleware from 'redux-thunk';
  import { composeWithDevTools } from 'redux-devtools-extension';

  //TODO :import reducers

  
  const reducer = combineReducers({
//TODO: list all reducers
  });
  
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      loggingMiddleware
    ))
  );
  
  export default store;
  
  //TODO: export action creators
 // export * from './channels';
