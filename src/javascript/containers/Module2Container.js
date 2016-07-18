import React from 'react';
import {connect} from 'react-redux';
import Box from '../components/Box';

const Module2Container = React.createClass({
  render() {
    return <div className="module2">
      <h2>Module2 container, id: {this.props.params.id}</h2>
      <Box name="Module 2" />
    </div>;
  }
});

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(Module2Container);
