import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
import ZhihuHead from './ZhihuHead'
import ZhihuList from './ZhihuList'
import ZhihuFooter from './ZhihuFooter'
import './css/app.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {data:[]}
    this.addItem = this.addItem.bind(this)
    this.editItem = this.editItem.bind(this)
  }
  //初始化data
  componentDidMount(){
    this.setState({data:[
      '这是第一条',
      '这是第二条',
      '花儿为什么这样红？',
      '你知道小月月是哪个不？',
      '人生是一个悲剧'
    ]})
  }
  //增加条目
  addItem(){
    var _arr = this.state.data
    _arr.push('未命名')
    this.setState({data:_arr})
  }
  //编辑条目
  editItem(index,item){
    // console.log(index,item);
    var _arr = this.state.data
    _arr[index] = item
    this.setState({data:_arr})
  }
  render(){
    return (
      <div className="app">
        <ZhihuHead count={this.state.data.length} />
        <ZhihuList items={this.state.data} oneditItem={this.editItem} />
        <ZhihuFooter onaddItem={this.addItem} />
      </div>
    )
  }
}

render(<App />,$('#content')[0])
