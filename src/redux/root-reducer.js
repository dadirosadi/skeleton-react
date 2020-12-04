import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import homeReducer from './home/home.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['home']
};

const rootReducer = combineReducers({
  home: homeReducer,
});

export default persistReducer(persistConfig, rootReducer);
