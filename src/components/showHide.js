import React from "react";

class Hide extends React.Component {
  state = { showing: true };

  render() {
    const { showing } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ showing: !showing })}>
          Button
        </button>
        {showing ? (
          <div>
            <h1>Hello</h1>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Hide;
