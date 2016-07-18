import React from 'react';
import Box from '../components/Box';

const Module1Container = React.createClass({
  render() {
    return <div className="module1">
      <h2>Module1 container, id: {this.props.params.id}</h2>
      <Box name="Module 1" />
    </div>;
  }
});

export default Module1Container;
