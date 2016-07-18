import React from 'react';
import {connect} from 'react-redux';
import Box from '../components/Box';

const Module1Container = React.createClass({
  render() {
    return <div className="module1">
      <h2>Module1 container, id: {this.props.params.id}</h2>
      <Box name="Module 1" />
    </div>;
  }
});

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(Module1Container);
