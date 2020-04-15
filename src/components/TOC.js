import React, { Component } from 'react';

class TOC extends Component {
    render() {

        const dataList = [];
        const datas = this.props.data;

        for (const data of datas) {
            dataList.push(<li key={data.id}><a href={"/content/"+data.id}>{data.title}</a></li>);
        }

        return (
            <nav>
               {dataList}
            </nav>
        );
    }
}

export default TOC;