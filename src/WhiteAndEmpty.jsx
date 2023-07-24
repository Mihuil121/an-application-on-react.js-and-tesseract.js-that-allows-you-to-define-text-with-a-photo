import React, { Component } from 'react'
import FileSelection from './FileSelection'
import Find from './Find'

export default class WhiteAndEmpty extends Component {
  constructor(props) {
      super(props)
    
      this.state = {
        text: null,
        inpyt: [''],
      }
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleInpyt=this.handleInpyt.bind(this);
    }
    handleInpyt(newInpyt){
      this.setState({ inpyt:newInpyt});
    }
    handleTextChange(newText) {
        this.setState({text: newText});
    }

render() {

  return (
    <div className="Apps">
      <FileSelection onTextChange={this.handleTextChange} />
     <Find onTextChange={this.handleInpyt}/>
     
    </div>
  )
}
}


