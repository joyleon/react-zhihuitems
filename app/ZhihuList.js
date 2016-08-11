import React from 'react'
import {render} from 'react-dom'
import ZhihuItem from './ZhihuItem'

export default class ZhihuList extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    var that = this
    return (
      <div className='ZhihuList'>
        <div className="list">
          {this.props.items.map(function(item,index){
            return (
              <ZhihuItem key={index} {...item} index={index} {...that.props} >{item}</ZhihuItem>
            )
          })}
        </div>
      </div>
    )
  }
}
