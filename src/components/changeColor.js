import React from "react";

class ChangeColor extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      color: "Black"
    };
  }

  onChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      color: this.state.input,
      input: ""
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="enter HTML color"
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          />
          <button type="submit">Change Color</button>
        </form>
      </div>
    );
  }
}

export default ChangeColor;