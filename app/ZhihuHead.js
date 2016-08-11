import React from 'react'
import {render} from 'react-dom'

export default class ZhihuHead extends React.Component {
  render(){
    return (
        <div className="hd">现在一共有：{this.props.count}<strong className="item_count"></strong> 个条目</div>
    )
  }
}
