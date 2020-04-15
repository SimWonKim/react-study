import React, { Component } from "react";

class TOC extends Component {
  render() {
    const dataList = [];
    const datas = this.props.data;

    for (const data of datas) {
      dataList.push(
        <li key={data.id}>
          <a
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
            href={"/content/" + data.id}
          >
            {data.title}
          </a>
        </li>
      );
    }

    return <nav>{dataList}</nav>;
  }
}

export default TOC;
