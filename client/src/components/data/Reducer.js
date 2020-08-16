/* eslint-disable indent */
import { ActionTypes } from './Types';

export const Reducer = (dataStore, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...dataStore,
        [action.payload.dataType]: action.payload.data.docs,
        [`${action.payload.dataType}__params`]: action.payload.params,
        pageCount: action.payload.data.pages,
        loading: false,
      };

    case ActionTypes.SEARCH:
      return {
        ...dataStore,
        searchKey: action.payload,
      };

    case ActionTypes.DATA_GET_FILTERS:
      return {
        ...dataStore,
        [action.payload.dataType]: action.payload.data,
      };

    case ActionTypes.DATA_SET_FILTERS:
      return {
        ...dataStore,
        filterStatus: action.payload,
      };

    case ActionTypes.DATA_SET_SORT_KEY:
      return {
        ...dataStore,
        sort: action.payload,
      };

    case ActionTypes.DATA_SET_PAGE_SIZE:
      return {
        ...dataStore,
        pageSize: action.payload,
      };

    case ActionTypes.RESET_PARAMETERS:
      return {
        ...dataStore,
        searchKey: '',
        filterStatus: {},
        sort: '-tanggalRegister',
        pageSize: 5,
        barangDetail: undefined,
      };

    case ActionTypes.DATA_GET_BARANG_COUNT:
      return {
        ...dataStore,
        barangCount: action.payload.data,
      };

    case ActionTypes.DATA_GET_BARANG_DETAIL:
      return {
        ...dataStore,
        barangDetail: action.payload.data,
      };

    case ActionTypes.LOADING:
      return {
        ...dataStore,
        loading: action.payload,
      };

    case ActionTypes.SET_AUTHENTICATION:
      return {
        ...dataStore,
        isAuthenticated: action.payload.status,
        user: action.payload.status ? action.payload.username : null,
        loading: false,
      };

    default:
      return dataStore || {};
  }
};
