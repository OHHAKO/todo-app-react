import React from "react";

class HelloMessage extends React.Component {
  render() {
    return <div>nice to meet you {this.props.name}</div>;
  }
}

export default HelloMessage;
