import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: true
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    const shown = {
      display: this.state.shown ? "block" : "none"
    };

    const hidden = {
      display: this.state.shown ? "none" : "block"
    };

    return (
      <div>
        <h2 style={shown}>Hello</h2>
        <h2 style={hidden}>Goodbye</h2>
        <button onClick={this.toggle.bind(this)}>Toggle</button>
      </div>
    );
  }
}
