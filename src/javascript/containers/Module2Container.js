import React from 'react';
import {connect} from 'react-redux';
import {fetchCats} from '../actions';

const Module2Container = React.createClass({
  onSearchClick(e) {
    var name = this.refs.name.value;
    this.props.dispatch(fetchCats(name))
  },
  componentDidMount() {
    this.props.dispatch(fetchCats(''));
  },
  render() {
    var message = this.props.cats.loading ? <p>Loading</p> : ''

    return <div className="module2">
      <h2>Module2 container, id: {this.props.params.id}</h2>
      {message}
      <input type="text" placeholder="Your cat name" ref="name" />
      <button onClick={this.onSearchClick}>Search Cats</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cats.data.map((cat, index) => {
              return <tr key={index}>
                <td>{cat.name}</td>
                <td>{cat.color}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    cats: state.cats
  };
}
export default connect(mapStateToProps)(Module2Container);
