import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import user from './reducers/user.reducer';
import post from './reducers/post.reducer';
import config from './reducers/config.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['drawerCollapse', 'onPagePost'],
};

const reducers = combineReducers({
  user: persistReducer(persistConfig, user),
  post,
  config: persistReducer(persistConfig, config),
});

/* const persistedReducer = persistReducer(persistConfig, reducers);
 */
export default () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};
