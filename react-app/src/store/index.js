import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import storiesReducer from './stories';
import commentsReducer from './comments';
import clapsReducer from './claps';
import usersReducer from './users';
import profilesReducer from './profiles';

const rootReducer = combineReducers({
  session,
  stories: storiesReducer,
  comments: commentsReducer,
  claps: clapsReducer,
  users: usersReducer,
  profiles: profilesReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
