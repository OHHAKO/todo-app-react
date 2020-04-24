import React from "react";

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { age: 0 };
  }

  handleIncrease = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    return (
      <div>
        nice to meet you {this.props.name}
        <div>age: {this.state.age}</div>
        <button onClick={this.handleIncrease}>increase</button>
      </div>
    );
  }
}

export default HelloMessage;
