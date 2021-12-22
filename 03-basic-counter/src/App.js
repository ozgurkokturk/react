import React, { Component } from "react";
import Counter from "./Counter";
import ChangeNumber from "./ChangeNumber";

export default class App extends Component {
  state = {
    currentNumber: 0,
  };

  actionHandler = (items) => {
  
    let payload = items.payload;
    var action = items.actions;
    let newState = this.state;

    switch (action) {
      case '+':
        newState.currentNumber += payload;
        break;
      case "-":
        newState.currentNumber -= payload;
        break;
      default:
        return "error!";
    }
    this.setState({currentNumber : newState.currentNumber});
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Counter number={this.state.currentNumber} />
        <ChangeNumber actionHandler={this.actionHandler} />
      </div>
    );
  }
}
