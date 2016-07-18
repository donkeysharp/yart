import React from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from '../routes';

var RootContainer = React.createClass({
  render() {
    let store = this.props.store;
    let history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
});

export default RootContainer;
