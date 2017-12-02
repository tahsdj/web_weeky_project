import React from 'react'
import ReactDOM from 'react-dom'
import './chat-board.sass'
import MsgBoard from 'components/msg-board.jsx'
import {googleTTS} from 'google-tts-api'

export default class ChatBoard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			msg: [],
			currentComment: ''
		}
		this.handleCurrentInput = this.handleCurrentInput.bind(this)
		this.enterMsg = this.enterMsg.bind(this)
	}
	render(){
		return (
			<div className="chat-container">
				<MsgBoard msg={this.state.msg} 
							currentMsg={this.state.currentComment}/>
				<input className="msg-input" 
						onChange={this.handleCurrentInput}
						onKeyPress={this.enterMsg}/>
			</div>
		)
	}
	handleCurrentInput(e){
		let content = e.target.value
		this.setState({
			currentComment: content
		})
	}
	enterMsg(e){
		if(e.key === 'Enter'){
			if(this.state.currentComment != ''){
				let msg = this.state.msg
				msg.push(this.state.currentComment)
				let _this = this
				/*
				googleTTS(_this.state.currentComment,'en',1).then(url=>{
					console.log(url)
				}).catch( err =>{
					console.error(err.stack)
				})*/
				this.setState({
					msg: msg,
					currentComment: ''
				})
				e.target.value = ''
			}
		}
	}
}