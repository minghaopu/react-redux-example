import React from 'react';
import { connect } from 'react-redux';
import List from '../../components/List';

// const mapStateToProps = state => ({
//   isFetching: state.getIn(['loading', 'isFetching']),
//   items: state.getIn(['star', 'starred']).toJS()
// })

const mapStateToProps = state => ({
  isFetching: state.loading.get('isFetching'),
  items: state.star.get('starred').toJS()
})

export default connect(
  mapStateToProps
)(List);
