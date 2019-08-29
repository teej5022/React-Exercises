import React from "react";
import Clock from "react-live-clock";

export default class Time extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {<Clock format={"LTS"} ticking={true} timezone={"US/Central"} />}
        </h1>
      </div>
    );
  }
}
