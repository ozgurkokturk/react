import React, { Component } from "react";

export default class ChangeNumber extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.actionHandler({payload:1,actions:'+'})}>+1 Arttır</button>
        <button onClick={() => this.props.actionHandler({payload:2,actions:'+'})}>+2 arttır</button>
        <button onClick={() => this.props.actionHandler({payload:1,actions:'-'})}>-1 Azalt</button>
        <button onClick={() => this.props.actionHandler({payload:5,actions:'-'})}>-5 Azalt</button>
      </div>
    );
  }
}
