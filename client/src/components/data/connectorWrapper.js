import { connect } from 'react-redux';
import * as actions from './ActionCreators';

const mapStoreToProps = dataStore => dataStore;
const mapDispatchToProps = { ...actions };

export const connectorWrapper = component => {
  return connect(mapStoreToProps, mapDispatchToProps)(component);
};
