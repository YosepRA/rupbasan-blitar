import { ActionTypes, DataTypes } from './Types';
import { RestDataSource } from './RestDataSource';

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
