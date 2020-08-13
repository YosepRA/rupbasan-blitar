import { ActionTypes, DataTypes } from './Types';
import { RestDataSource } from './RestDataSource';
import { Urls } from './Urls';

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.getRequest(dataType, params).then(result => ({
    dataType,
    params,
    data: result.data,
  })),
});

export const getFilters = () => ({
  type: ActionTypes.DATA_GET_FILTERS,
  payload: dataSource.getRequest(DataTypes.FILTERS).then(result => ({
    dataType: DataTypes.FILTERS,
    data: result.data,
  })),
});

export const setFilters = filterStatus => ({
  type: ActionTypes.DATA_SET_FILTERS,
  payload: filterStatus,
});

export const setSortKey = sortKey => ({
  type: ActionTypes.DATA_SET_SORT_KEY,
  payload: sortKey,
});

export const setPageSize = pageSize => ({
  type: ActionTypes.DATA_SET_PAGE_SIZE,
  payload: pageSize,
});

export const search = searchKey => ({
  type: ActionTypes.SEARCH,
  payload: searchKey,
});

export const resetParameters = () => ({
  type: ActionTypes.RESET_PARAMETERS,
});

export const getBarangCount = () => ({
  type: ActionTypes.DATA_GET_BARANG_COUNT,
  payload: dataSource.getRequest(DataTypes.BARANG_COUNT).then(result => ({
    data: result.data,
  })),
});

export const getBarangDetail = id => ({
  type: ActionTypes.DATA_GET_BARANG_DETAIL,
  payload: dataSource
    .sendRequest('get', `${Urls[DataTypes.BARANG]}/${id}`)
    .then(result => ({
      data: result.data,
    })),
});

export const setLoadingState = state => ({
  type: ActionTypes.LOADING,
  payload: state,
});
