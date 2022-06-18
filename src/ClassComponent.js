import React from "react";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <>
      <h1>ClassComponent</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
      </>
    );
  }
}
