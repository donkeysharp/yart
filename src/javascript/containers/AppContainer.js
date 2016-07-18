import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

let AppContainer = React.createClass({
  render() {
    let id = Math.floor(Math.random()* 10);
    return <div>
      <h1>React Application</h1>
      <Link to={`/sub1/${id}`}>Module 1</Link>
      <br />
      <Link to={`/sub2/${id}`}>Module 2</Link>
      { this.props.children }
    </div>;
  }
});

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(AppContainer);
