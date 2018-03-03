import React from 'react'
import ReactDOM from 'react-dom'
import './info-card.sass'
import {connect} from 'react-redux'
import {editHour,editMinute,editSecond,countDown,getDestination,reSet} from 'state/data-handler.js'

class PostCard extends React.Component {
	constructor(props) {
		super(props)
		
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
		
		if (false) {
			//if (this.permission === 'granted') {
				this.notifyConfig.icon = this.props.img
				this.notifyConfig.body = '目前到'+this.props.placeName+'了'
				let notification = new Notification('新景點', this.notifyConfig)
			//}
		}
		return (
			<div className = "info-card-container">
				<div className ="header-container row">
					<div className="profile-container">
						<img src="http://www.gametsg.com/temppic_paperdoll/198ad25cb85f7f343e7fe5a37e660ecb.png" 
						style={{}}/>
					</div>
					<div className="position-description">
						<span className="name">初心者</span>
						<span className="place">{this.props.placeName}</span>
					</div>
				</div>
				<div className = "image-container col">
					 <img className="spot" src={this.props.img}/>
				</div>
			</div>
		)
	}
}


export default connect( state => (
		{
			start: state.timer.start,
			end: state.timer.end
		}
	))(PostCard)
