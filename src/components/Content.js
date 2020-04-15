import React, { Component } from "react";

// props는 readonly다. 변경을 시도하면 에러 난다. 상위외부 부터 받은 값이므로

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default Content;
