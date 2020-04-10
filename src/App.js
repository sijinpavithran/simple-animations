import React, { Component } from "react";
import Component1 from "./components/Components1";
import Component2 from "./components/Components2";
import Component3 from "./components/Component3";
import "./App.css";
import { Transition, animated } from "react-spring/renderprops";

export default class App extends Component {
  state = {
    showComponent3: false,
  };

  toggle = (e) => {
    this.setState({ showComponent3: !this.state.showComponent3 });
  };
  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(show) =>
            show &&
            ((props) => (
              <animated.div style={props}>
                <Component3 />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}
