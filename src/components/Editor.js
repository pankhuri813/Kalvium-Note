import './Editor.css';
import React, { Component } from 'react'


export default class Editor extends Component {
    constructor(props) {
      super(props)


      this.state = {
         value:'write something'
      }
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    reset(){
      this.setState({
        value:''
      })
    }

  render() {
    return (
        <div className="container">

        <div className="input">
            <h3>Input</h3>
            
            <textarea className="input-text" onChange={(changedText)=>this.handleChange(changedText)} value={this.state.value}/>
            <button  onClick={()=>this.reset()}>↻</button>
        </div>
        <div className="output">
            <h3>Pro Note</h3>
            <div className="output-text">{this.state.value}</div>
        </div>                
    </div>
    )
  }
}