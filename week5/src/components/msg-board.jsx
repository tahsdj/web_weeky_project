import React from 'react'
import ReactDOM from 'react-dom'
import './msg-board.sass'

export default class MsgBoard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inputAnimate: '. . . ',
			timer: null
		}
		//this.timer = null
		/*
		this.handleCurrentInputAnimate = this.handleCurrentInputAnimate.bind(this)
		this.animate = this.animate.bind(this)
		this.clearTimer = this.clearTimer.bind(this)
		*/
	}
	render(){
		let nowMsg = this.props.currentMsg
		let msg = this.props.msg
		let msgDom = null
		let msgDomList = null
		//deal withd current input
		if( nowMsg != '' ) {
			//this.handleCurrentInputAnimate()
			msgDom = (<div className="message">{this.state.inputAnimate}</div>)
		}
		//handle all input msg
		if( msg.length != 0 ){
			msgDomList = msg.map( m => {
				return (
					<div className="message">
						{m}
					</div>
				)
			})
		}
		return(
			<div className="msg-container">
				{msgDomList}
				{msgDom}
			</div>
		)
	}
	/*
	handleCurrentInputAnimate(){
		this.setState({
			timer: setInterval(this.animate,1000)
		})
	}

	animate(){
		if(this.props.currentMsg !== ''){
			let content = this.state.inputAnimate
			if( content.length < 14 ){
				content += '. '
			}
			else if( content.length >= 14 ){
				content = '. . . '
			}
			this.setState({
					inputAnimate: content
				})
		}
	}
	clearTimer(){
		let _this = this
		clearInterval(_this.state.timer)
		this.setState({
				inputAnimate: '. . . ',
				timer: null
			})
	}*/
}