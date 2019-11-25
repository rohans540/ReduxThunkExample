import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          Your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age up</button>
        <button onClick={this.props.onAgeDown}>Age down</button>
        {this.props.loading && <img src={logo} className="App-logo" />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreators.ageUp(1)),
    onAgeDown: () => dispatch(actionCreators.ageDown(1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
