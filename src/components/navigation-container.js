import React from "react";
import { NavLink } from "react-router-dom";

class NavigationContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/clock">
          Clock
        </NavLink>
        <br />
        <NavLink exact to="/counter">
          Counter
        </NavLink>
        <br />
        <NavLink exact to="/toggle">
          Toggle
        </NavLink>
        <br />
        <NavLink exact to="/showHide">
          Hide
        </NavLink>
        <br />
        <NavLink exact to="/align">
          Align
        </NavLink>
        <br />
        <NavLink exact to="/growshrink">
          Grow
        </NavLink>
        <br />
        <NavLink exact to="changeColor">
          Change Color
        </NavLink>
      </div>
    );
  }
}

export default NavigationContainer;
