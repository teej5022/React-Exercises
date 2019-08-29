import React from "react";

class Align extends React.Component {
  constructor() {
    super();

    this.state = {
      align: ""
    };
  }

  handleAlign(alignment) {
    this.setState({
      align: alignment
    });
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: this.state.align }}>Align me</h2>
        <button onClick={() => this.handleAlign("left")}>Left</button>
        <button onClick={() => this.handleAlign("center")}>Center</button>
        <button onClick={() => this.handleAlign("right")}>Right</button>
      </div>
    );
  }
}

export default Align;
