/**
 * ************************************
 *
 * @module  App.jsx
 * @author All
 * @date
 * @description renders React app
 *
 * ************************************
 */

import React, {Component} from 'react';
import '../styles/styles.scss';

// import ErrorBox from './ErrorBox.jsx'

class App extends Component {
  constructor(props){
    super(props)
  }

  // componentDidMount(){
  //   document.title("HEY")
  // }
  
  state = {
    addChannel : '',
    channels : ['Select a Channel','politics', 'sports'],
    curChannel: '',
    curMessage : ''
  }

  handleAddChannelChange = (event) => {
    console.log(this.state)
    this.setState({
      ...this.state,
      addChannel:event.target.value
    })
    return;
  }

  handleAddChannelSubmit= (event) => {
    console.log(this.state)
    let channels = this.state.channels;
    channels.push(this.state.addChannel)
    this.setState({
      ...this.state,
      addChannel:'',
      channels: channels,
    })
    return;
  }

  handleCurChannelChange = (event) => {
    this.setState({
      ...this.state,
      curChannel: event.target.value

    })
  }

  handleCurMessageChange = (event)=>{
    this.setState({
      ...this.state,
      curMessage: event.target.value,
      curChannel:'Select a Channel'
    })

  }

  handleCurMessageSubmit = () => {
    //call fetch request here
    console.log(this.state)
    fetch('/api/publish',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({message:this.state.curMessage, channel: this.state.curChannel})
    }).then(response=>{
      this.setState({
        ...this.state,
        curMessage : '',
        curChannel : '' 
      })
    })
  }

  render(){
    let channels = this.state.channels
    let channelList = channels.length > 0 && channels.map((item, index)=>{
      return(
      <option key={index} value = {item}>{item}</option>
      )
    })
    return (
     <div className = 'main'>
     {/* want two main divs 1. input and button that allows you to add channel to dropdown 2.dropdown with button click that allows you to publish */}
      <div className='grid-container'>
            <img src = "https://lh3.googleusercontent.com/proxy/5W_T-krTLpueAslVRWNBaABItvohALYUHdwSr7H6dxrmq8A0fGIkJyBLOHw0iLNXeRoxl4K1cRK_EH_SrOxXWEhYTE352rAnH4CuTgVkzz6dtrCcJ8jz747QMssVpMZm" className="main-img" />
            <div className="box-news"><h1>BOX NEWS</h1></div>
            <h2 className="headers">Create Channel</h2>
          <div className = "line-one">
            <input onChange={this.handleAddChannelChange} value={this.state.addChannel} placeholder="Channel Name"></input>
            <button onClick = {this.handleAddChannelSubmit}>Add</button>
          </div>
            <h2 className="headers">Publish News </h2>
          <div className = "line-two">
            <input onChange={this.handleCurMessageChange} value = {this.state.curMessage} placeholder="Create Message"></input>
            <select onChange={this.handleCurChannelChange} value = {this.state.curChannel}> {channelList} </select>
            <button onClick={this.handleCurMessageSubmit}>submit</button>
          </div>
      </div>
     
     </div>
    )
    
  }
}

export default App;
