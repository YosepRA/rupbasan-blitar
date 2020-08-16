import { connect } from 'react-redux';
import { getFilters } from './data/ActionCreators';
import { Header } from './Header';

const mapStoreToProps = ds => ({
  instansi: ds.filters && ds.filters.instansi,
});
// const mapStoreToProps = dataStore => dataStore;
const mapDispatchToProps = { getFilters };

export const HeaderConnector = connect(
  mapStoreToProps,
  mapDispatchToProps
)(Header);
