import React from 'react'
import ReactDOM from 'react-dom'
import './info-card.sass'
import {connect} from 'react-redux'
import {editHour,editMinute,editSecond,countDown,getDestination,reSet} from 'state/data-handler.js'

class InfoCard extends React.Component {
	constructor(props) {
		super(props)
		this.editHour = this.editHour.bind(this)
		this.editMinute = this.editMinute.bind(this)
		this.editSecond = this.editSecond.bind(this)
		this.startTimer = this.startTimer.bind(this)
		this.reSet = this.reSet.bind(this)
		this.timer = null
		this.notificationPermission = ''
		this.notifyConfig = {
			body: '',
			icon: ''
		}
	}
	componentDidMount() {
		if (Notification.permission === 'default' || Notification.permission === 'undefined') {
		  Notification.requestPermission(function (permission) {
		  	this.notificationPermission = permission
		    if (permission === 'granted') { // 使用者同意授權
		      //var notification = new Notification('Hi there!', notifyConfig); // 建立通知
		    }
		  })
		}
		console.log(this.notificationPermission)
	}
	render() {
		let hour = this.props.hour < 10 ? '0' + this.props.hour: this.props.hour
		let minute = this.props.minute < 10 ? '0' + this.props.minute: this.props.minute
		let second = this.props.second < 10 ? '0' + this.props.second: this.props.second
		this.hour = this.props.hour
		this.minute = this.props.minute
		this.second = this.props.second
		let buttonText = this.props.start? '旅行中...': (this.props.end?'新的旅程':"開始")
		let clockForm = null
		let buttonDom = null
		if (!this.props.start) {
			clockForm = (
				<div>
					<input value={this.hour} className="hour time" onChange={this.editHour}/><span>:</span>
					<input value={this.minute} className="minute time" onChange={this.editMinute}/><span>:</span>
					<input value={this.second} className="second time" onChange={this.editSecond}/>
				</div>
			)
			if (!this.props.end) {
				buttonDom = (
					<button onClick = {this.startTimer} className = "button">
						{buttonText}
					</button>
				)
			}else{
				buttonDom = (
					<button onClick = {this.reSet} className = "button">
						{buttonText}
					</button>
				)
			}
		}else{
			clockForm = (
				<div>
					<span className = "hour time">{hour + ' : '}</span>
					<span className = "hour time">{minute + ' : '}</span>
					<span className = "hour time">{second }</span>
				</div>
			)
			buttonDom = (
				<div className = "travel-status">
					<span>{buttonText}</span>
				</div>
			)
		}
		if (this.props.end) {
			//if (this.permission === 'granted') {
				this.notifyConfig.icon = this.props.destination.imageUrl
				this.notifyConfig.body = '目前在'+this.props.destination.name
				let notification = new Notification('新景點', this.notifyConfig)
			//}
		}
		return (
			<div className = "info-card-container">
				<div className ="header-container row">
					<div className="profile-container">
						<img src="http://www.gametsg.com/pic/link_to_index.gif"/>
					</div>
					<div className="position-description">
						<span className="name">初心者</span>
						<span className="place">{this.props.destination.name}</span>
					</div>
				</div>
				<div className = "image-container col">
					{!this.props.end && <img className = "user" src=""/>}
					{this.props.end && <img className="spot" src={this.props.destination.imageUrl}/>}
				</div>
				<div className = "timer-container col">
					{!this.props.end && <div className = "timer row">
							{clockForm}
						</div>
					}
					{ this.props.end && <span className = "row">{'目前在'+this.props.destination.name}</span>}
				</div>
				<div className = "button-container col">
					{buttonDom}
				</div>
			</div>
		)
	}
	editHour(e) {
		let content = e.target.value
		console.log('hour: ', content)
		this.props.dispatch(editHour(content))
	}
	editMinute(e) {
		let content = e.target.value
		console.log('hour: ', content)
		this.props.dispatch(editMinute(content))
	}
	editSecond(e) {
		let content = e.target.value
		console.log('hour: ', content)
		this.props.dispatch(editSecond(content))
	}
	startTimer() {
		//setInterval(this.props.dispatch(updateTime(this.second)),1000)
		this.props.dispatch(getDestination())
		this.props.dispatch(countDown(this.second))
	}
	reSet() {
		this.props.dispatch(reSet())
	}
}


export default connect( state => (
		{
			hour: state.timer.hour,
			minute: state.timer.minute,
			second: state.timer.second,
			destination: state.data.destination,
			start: state.timer.start,
			end: state.timer.end,
		}
	))(InfoCard)
