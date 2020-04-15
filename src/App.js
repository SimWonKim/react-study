import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  // 컴포넌트 실행될때 constructor가 있으면 우선 실행되어 초기화를 담당함.
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      welcome: { title: "Welcome", desc: "Hello, React" },
      subject: {
        title: "WEB",
        sub: "Word Wide Web!!!",
      },
      contents: [
        { id: 1, title: "html", desc: "html is blabla" },
        { id: 2, title: "js", desc: "js is blabla" },
      ],
    };
  }

  // props나 state가 바뀌면 자동으로 render함수가 실행 된다.
  render() {
    let _title = null;
    let _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject
          // 상위 컴포넌트의 값을 하위 컴포넌트로 전달 가능.
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            // 내가 추가한 이벤트 함수임.
            console.log("함수 실행");
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function () {
            this.setState({ mode: "read" });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;

// redux를 이용해 props를 하나의 저장소에 저장하므로써 관리가 가능하다.
// router를 이용하면 url에 따라 컴포넌트를 실행함.
//
