import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  handleIncrement = amt => {
    this.setState(prevState => ({
      count: prevState.count + amt
    }));
  };

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleIncrement(1)}>Add</button>
        <button onClick={() => this.handleIncrement(-1)}>Sub</button>
      </div>
    );
  }
}
