import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Hello Mars</h1>
        <h2>{this.props.sayacDurum}</h2>
      </div>
    );
  }
}

function mapStateToProps(gelenState) {
  return { sayacDurum: gelenState.counterReducer };
}

export default connect(mapStateToProps)(Counter);
