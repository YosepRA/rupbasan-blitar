import { createStore, applyMiddleware } from 'redux';
import { BarangReducer } from './BarangReducer';
import { asyncAction } from './AsyncMiddleware';

export const RupbasanBlitarDataStore = createStore(
  BarangReducer,
  applyMiddleware(asyncAction)
);
