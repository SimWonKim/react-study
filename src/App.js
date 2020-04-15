import React, { Component } from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {

    // 컴포넌트 실행될때 constructor가 있으면 우선 실행되어 초기화를 담당함.
    constructor(props) {
        super(props)
        this.state = {
            subject: {
                title: 'WEB',
                sub: 'Word Wide Web!!!'
            },
            contents : [
                {id : 1, title : 'html', desc : 'html is blabla'},
                {id : 2, title : 'js', desc : 'js is blabla'}
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <Subject
                    // 상위 컴포넌트의 값을 하위 컴포넌트로 전달 가능.
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}>
                </Subject>
                {/* <Subject title="WEB2" sub="world wide web2"></Subject> */}
                <TOC data={this.state.contents}></TOC>
            </div>
        );
    }
}

export default App;
