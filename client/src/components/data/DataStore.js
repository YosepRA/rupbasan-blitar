import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './Reducer';
import { asyncAction } from './AsyncMiddleware';

export const RupbasanBlitarDataStore = createStore(
  Reducer,
  applyMiddleware(asyncAction)
);
