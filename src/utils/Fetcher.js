import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Error } from 'views/ui';

const Fetcher = ({ fetchData, preLoader, loading, error, children }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return preLoader;
  if (error) return <Error message={error} />;

  return children();
};

const mapStateToProps = ({ ui }) => {
  return {
    loading: ui.loading.todos,
    error: ui.error,
  };
};

export default connect(mapStateToProps)(Fetcher);
