import React from 'react';
import {render} from 'react-dom';
import RootContainer from './containers/RootContainer';
import {configureStore} from './store';


document.addEventListener('DOMContentLoaded', function() {
  let store = configureStore();
  render(
    <RootContainer store={store} />,
    document.getElementById('root')
  );
});
