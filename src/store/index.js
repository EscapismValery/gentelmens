import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { productsReducer } from './productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
