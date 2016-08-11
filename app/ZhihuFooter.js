import React from 'react'
import {render} from 'react-dom'

export default class ZhihuFooter extends React.Component{
  constructor(){
    super()
    this.onaddItem = this.onaddItem.bind(this);
  }
  //新增条目
  onaddItem(){
    this.props.onaddItem();
  }
  render(){
    return (
      <div className="ft"><a href="javascript:;" onClick={this.onaddItem}>新增条目</a></div>
    )
  }
}
