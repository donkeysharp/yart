import React from 'react';

const Box = React.createClass({
  render() {
    return <div>
      <h4>This a <u><i>box</i></u> component</h4>
      <i>Hello {this.props.name}</i>
    </div>;
  }
});

export default Box;
