import React from "react";

class HelloUA extends React.Component {
  static async getInitialProps() {
    const userAgent = 'OK'
    return { userAgent };
  }

  render() {
    return <div>Hello World {this.props.userAgent}</div>;
  }
}

export default HelloUA;
