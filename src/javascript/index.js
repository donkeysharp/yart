import React from 'react';
import {render} from 'react-dom';
import RootContainer from './containers/RootContainer';

document.addEventListener('DOMContentLoaded', function() {
  render(
    <RootContainer />,
    document.getElementById('root')
  );
});
