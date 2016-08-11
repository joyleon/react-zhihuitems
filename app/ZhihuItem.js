import React from 'react'
import {render} from 'react-dom'
import $ from 'jquery'

export default class ZhihuItem extends React.Component{
  constructor(){
    super()
    this.editItem = this.editItem.bind(this)
  }
  //编辑条目
  editItem(e){
    if(!$(this.refs.editbutton).attr('store')){
      $(this.refs.editbutton).text('保存').attr('store',true)
      $(this.refs.edit).show()
      $(this.refs.edittext).hide()
    }else{
      $(this.refs.editbutton).text('修改').removeAttr('store')
      $(this.refs.edit).hide()
      $(this.refs.edittext).show()
      this.props.oneditItem(this.props.index,$(this.refs.edit).val())
    }
    return false;
  }
  render(){
    return (
      <div className="row" ><div><span ref="edittext">{this.props.children}</span><input type="text" defaultValue={this.props.children} className="hideinput" ref="edit" /></div><a href="javascript:;" ref="editbutton" onClick={this.editItem} >修改</a></div>
    )
  }
}
